import React from 'react';
import {Button,Container,Col,Row,Form} from 'react-bootstrap';



const Comments = (props)=>{
    console.log(props.comment)
    if(props.comment){
    console.log('I am returning')
    return(
        <Container fluid>
            <Row>
                <Col xs='10'>
                    <Form className='d-flex'>
                        <Form.Control type='textarea' placeholder='comment'/>
                    </Form>
                </Col>
                <Col xs='2'>
                <Button size='sm' block>Post</Button>
                </Col>
            </Row>
        </Container>

    )}else{
        return null
    }
}

export default Comments;