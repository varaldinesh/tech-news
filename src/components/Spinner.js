import React from 'react'

function Spinner() {
    return (
        <center>
            <div className="spinner-border" style={{ width: "3rem", height: "3rem" }} role="status">
                <span className="sr-only"></span>
            </div>
        </center>

    )
}

export default Spinner