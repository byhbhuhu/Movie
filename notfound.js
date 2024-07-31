import React from "react"
import {Alert} from "react-bootstrap";
const NotFound = (props) => {
    return(
        <>
            {[
                'warning'
            ].map((variant) => (
                <Alert variant={props.color}>
                    {props.message}
                </Alert>
            ))}
        </>
    )
}
export default NotFound