import React from 'react'
import { RotateLoader } from "react-spinners";
import './Loader.css'

export default function Loader() {
  return (
    <div className="loader">
    <RotateLoader
    color="#0f3460"
    size={20}
    aria-label="Loading Spinner"
    data-testid="loader"
    />
    </div>

  )
}
