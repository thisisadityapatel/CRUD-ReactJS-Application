import React from 'react'

function Footer() {

    let myStyles = {
        backgroundColor : "#f2f2f2",
        textAlign : "center",
        padding : "10px",
        position : "relative",
        top : "55vh",
        width : "100%"
    }

    return (
        <footer style={myStyles}>
            <div>
                Aditya Patel &#169; 2023
            </div>
        </footer>
    )
}

export default Footer