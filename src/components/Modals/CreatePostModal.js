import React from 'react';
import {Button,Modal} from 'react-bootstrap';
import './PostModal.css';


export const CreatePostModal = (props)=>{
    
    
 
    return(
        
        <Modal
        {...props}
        size="lg"
        aria-labelledby="create-post"
        dialogClassName='test'
        centered
        
        
      >
        
        <Modal.Header  closeButton>
        <Modal.Title  className='ml-auto' as='h3' id="create-post">
            Create Post
          </Modal.Title>
          
        </Modal.Header>
        
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        
      </Modal>
      
    )
    
}

