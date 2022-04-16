import React from 'react'
import ReactDOM from 'react-dom';
import { ModelStyle } from './style'

const Model = ({ children }) => {

    const overlayStyle = {
        position : 'fixed',
        top : 0,
        left : 0,
        width : '100%',
        height : '100%',
        backgroundColor : '#00000090',
        zIndex : 1000
    }
    return ReactDOM.createPortal (
        <>
            <ModelStyle>
                {children}
            </ModelStyle>
            <div style={overlayStyle}>

            </div>
        </>,document.getElementById("model")
    )
}

export default Model