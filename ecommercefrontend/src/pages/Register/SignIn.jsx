import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../../context/AuthProvider";
import './Register.css'
import axios from '../../api/axios';
import { Link, json } from 'react-router-dom';
const LOGIN_URL = '/auth';

export default function SignIn() {
    const {auth,setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();
    //try
   

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    //withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            //const accessToken = response?.data?.accessToken;
            //const roles = response?.data?.roles;
            //console.log(user,pwd);
            if(JSON.stringify(response.data.role)){
             setAuth({user,pwd,role:response.data.role})   
            }else{
                
            setAuth({ user, pwd });

            }    

            setUser('');
            setPwd('');
            setSuccess(true);
            

        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }
  return (
    <>
    <div className='mainlayout'>
            {success ? (
                <section className='rsection'>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <Link to='/'>go home</Link>
                    </p>
                </section>
            ) : (
                <section className='rsection'>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form id="signform" onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                         <Link to="/signup">Sign Up</Link>
                            <a href="#"></a>
                        </span>
                    </p>
                </section>
            )}
            </div>
        </>
        
  )
}
