import React from 'react';
import {Button,Form,Modal} from 'react-bootstrap';
import './PostModal.css';


export const EditPostModal = (props)=>{
    // const [value,setValue] = useState(props.content)
    const {content} = props
// console.log(content)
// comparing current post
 const processEdit =(e,id)=>{
     console.log(id)
    console.log(e.target.value)
        // const currentPost = postList.find(post => id === post.id);
        // let currentContent = currentPost.content;
        // if(onchange) {
        //     currentContent = e.target.value
        // }
        // setContent(currentContent)
        // console.log(currentContent)
    }
 
    return(
        
        <Modal
        {...props}
        size="lg"
        aria-labelledby="create-post"
        dialogClassName='test'
        centered
        
        
      >
        
        <Modal.Header  closeButton>
        <Modal.Title  className='ml-auto' as='h3' id="edit-post">
            Create Post
          </Modal.Title>
          
        </Modal.Header>
        
        <Modal.Body>
          <h4>Edit</h4>
          <Form>
          <Form.Control onChange={(e)=> processEdit(e,props.id)} defaultValue={content} as="textarea" rows={3} />
           
          </Form>
        </Modal.Body>
        
        <Modal.Footer>
          <Button onClick={props.onHide}>Post</Button>
        </Modal.Footer>
        
      </Modal>
      
    )
    
}

export default EditPostModal;

