import React,{lazy,Suspense} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./pages/Register/SignIn";
import Createpost from "./pages/posts/Createpost";
import Deletepost from "./pages/posts/Deletepost";
const Register =lazy(()=> import("./pages/Register/Register"))
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Cart = lazy(() => import("./pages/Cart"));
const Product = lazy(() => import("./pages/Product"));

function App() {


  return (
    <>
      
     <Suspense fallback={<Loader />}>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={ <Register />   }    />
          <Route path="/signin"  element ={<SignIn />  } />
          <Route path="/create" element={<Createpost/>}  />
          <Route path="/delete" element={<Deletepost/>}  />
          

        </Routes>
        <Footer />
      </Router>
    </Suspense>
    
    </>
  )
}

export default App
