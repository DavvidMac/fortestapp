import React from 'react';
import "./Button.css"

function Button({ tipo, children }) {
    return (
        <>
            <div className={tipo}>{children}</div>
        </>
    )
}
export default Button