import React,{useState} from 'react';
import {Button,Card,Container,Col,Row,Image} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn,faAt,faUser } from '@fortawesome/free-solid-svg-icons'
import {CreatePostModal} from '../Modals/CreatePostModal';
import RecentPost from './RecentPost'
import ProfilePics from '../Navigation/image1.jpg';

import './CreatePost.css'


const CreatePost = ()=>{
    const [modal,setModal] = useState(false)
    return (
        <Container className='pt-3' fluid>
            <Row >
                <Col className='d-flex flex-column justify-contents-between'>
                <Card >
                    <Image src={ProfilePics}  rounded='true' />
                    
                    <div className='mt-4 p-2'>
                    <h6><FontAwesomeIcon icon={faUser} className='text-muted mr-3 '/> Seyi Agboola</h6>
                    <h6><FontAwesomeIcon icon={faAt} className='text-muted mr-3'/>test@gmail.com</h6>
                    </div>
                </Card>
                <Card className = 'p-5 bg-primary mt-2'>
                    <p>Recent Pictures</p>
                </Card>
                </Col>
                <Col xs='7' >
                <Card className='mb-3'> 
                    <p className='text-center'><FontAwesomeIcon icon={faBullhorn} className='text-muted mr-3'/>Annoucements</p>
                </Card>
                <Card className='mt-3 m-auto' style={{ width: '28rem' }}>
              <div className='create-post-container  ml-5'>
                    <Image className='img mr-3' src={ProfilePics}  roundedCircle  />
                    <Button onClick={()=> setModal(true)} as='h6'  rounded='true'>What is on your mind</Button>{' '}
                     <CreatePostModal show={modal}onHide={()=> setModal(false)}/>
                     
              </div>
                </Card>
                <div className='mt-3'>
                <RecentPost/>
                </div>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default CreatePost;