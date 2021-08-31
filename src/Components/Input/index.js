import React from 'react';
import { Form } from 'react-bootstrap';
import './index.css';

function Input(props) {    
    return (
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{props.label}</Form.Label>
            <Form.Control type={props.type} name={props.name} placeholder={props.placeholder} onChange={props.onChange} value={props.value}/>
            {props.hasError && <Form.Text className="text-muted">Please Enter {props.label}</Form.Text>}
        </Form.Group>
    )
}

export default Input
