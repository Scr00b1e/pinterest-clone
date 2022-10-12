import React from 'react'
import BounceLoader from "react-spinners/BounceLoader";
import './loader.scss'

const Loader: React.FC = () => {
  return (
    <div className="loader">
        <BounceLoader
        color={"#000"}
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loader