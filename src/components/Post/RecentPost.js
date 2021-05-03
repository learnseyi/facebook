import React,{useState} from 'react';
import {Card,Image} from 'react-bootstrap';
import ProfilePics from '../Navigation/image1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPen } from '@fortawesome/free-solid-svg-icons'
import EditPostModal from '../Modals/EditPostModal';
import './RecentPost.css';
import { BrowserRouter as Router, Link} from 'react-router-dom';

const timeElapsed = Date.now();
const date = new Date(timeElapsed)
let num = 0
const posts = [
    {
        id: num ++,
        author: 'Seyi Agboola',
        profilePics: ProfilePics,
        date: date.toDateString(),
        content: 'thtkljklsjlksjkljskjskjksjksjksjkkskhkshkshkshskhkshkhskhskhs',
        images: []
    },
    {
        id: num ++,
        author: 'Bimbo Agboola',
        profilePics: ProfilePics,
        date: date.toDateString(),
        content: 'thtkljklsjlksjkljskjskjksjksjksjkkskhkshkshkshskhkshkhskhskhsthtkljklsjlksjkljskjskjksjksjksjkkskhkshkshkshskhkshkhskhskhs',
        images: [ProfilePics,ProfilePics,ProfilePics]
    },
    {
        id: num ++,
        author: 'Bimbo Agboola',
        profilePics: ProfilePics,
        date: date.toDateString(),
        content: '',
        images: [ProfilePics,ProfilePics,ProfilePics]
    }
]

const RecentPost = ()=>{
    const [postList,setPostList] = useState(posts)
    const [editModal,setEditModal] = useState(false)
    const [content,setContent] = useState(' ')
    // const [newContent,setNewContent] = useState(" ");
   
   

    const handleDelete =(id)=>{
        const currentPost = postList.find(post => id === post.id)
        const index = postList.indexOf(currentPost)
        postList.splice(index,1)
        setPostList([...postList])
    }
    const handleEdit =(e,id)=>{ //check if current post same as editing post if yes set as default value 
        setEditModal(true)
        const currentPost = postList.find(post => id === post.id);
        let currentContent = currentPost.content;
        setContent(currentContent)
    }
    
   return(
    postList.map(post =>{
        
        return(
        
            <Card key= {post.id} className='m-auto' style={{ width: '28rem' }}>
                <div className='author'>
                <Router>
                    <div className=' d-flex flex-row'>
                    <Image className='recent-img ' src={post.profilePics}  roundedCircle  />
                    <ul>
                        <li>
                            <Link to='/:user'>{post.author}</Link>
                        </li>
                        <li >
                        <p className='text-muted'>{post.date}</p>
                        </li>
                    </ul>
                    </div>
                    </Router>
                <div>
                <FontAwesomeIcon className='mr-2 text-primary' onClick = {(e)=>handleEdit(e,post.id) }icon={faPen} size='sm'/>
                <EditPostModal show={editModal} 
                               content={content} 
                               id={post}
                                
                               onHide={()=>setEditModal(false)}/>
                <FontAwesomeIcon className='mr-2 text-danger' onClick = {()=> handleDelete(post.id)}icon={faTrash} size='sm'/>
                </div>
                </div>
                <div className='text-justify p-3'>
                <p>{ post.content}</p>
                {post.images && post.images.map((img,i)=>{
                    return <Image key={i}src={img}/>
                })}
                </div>
              
            </Card>
    
        )
    }

    )
   )
   
}

export default RecentPost;

