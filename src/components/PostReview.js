import React,{useState} from 'react';
import "./PostReview.css";
import { useStateValue } from '../StateProvider';

const PostReview = () =>  {

  const [{review,institution,user}, dispatch] = useStateValue();
  const [contentz,setContentz] = useState("");
  
  const addReview = (e) => {
    e.preventDefault();
    //const content = document.querySelector(".postreview__content").value;  
    //document.querySelector(".postreview__content").value = "";
    dispatch({
        type: 'ADD_REVIEW',
        review: {
            "review": contentz,
            "institution-id": 344,
            "user": (user==null?"Anonymous User":user)
        }
    })
    setContentz("");
  }

  const textareaUpdate = (e) => {
    setContentz(e.target.value);
  }

  return (
    <form className="postreview">
        <div className="postreview__owner">
            {user}
        </div>
        <textarea contenteditable className="postreview__content" placeholder="Describe yourself here..." value={contentz} onChange={textareaUpdate}>
           
        </textarea>
        <div className="postreview__post">
            <button onClick={addReview} className="postreview__post__button">Post</button>
        </div>
    </form>        
  )
}

export default PostReview;

