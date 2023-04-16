import React from 'react'
// this is our placeholder thumbnail image
import wheelSpin from '../assets/files/wheel.gif'

/* main function that displays loading screen */
function Loading() {
    //we just display spinning wheel gif
    return (
        <main className="loading-main">
            <div>
                <img className = "loading-screen" src={wheelSpin} alt="loading..." />
            </div>    
        </main>
    )
}

export default Loading