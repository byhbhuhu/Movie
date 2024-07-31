import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";

const Cardo= (props)=> {
    const click = ()=>{
        props.on(props.title)
    }
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Button onClick={click} variant="primary">count the clicks</Button>
                {props.children}
            </Card.Body>
        </Card>

    );
}
export default Cardo;