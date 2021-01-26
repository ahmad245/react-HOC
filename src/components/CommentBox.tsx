import React, { useState } from 'react'
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import autHof from '../HOF/autHof';


const CommentBox=()=>{
  const [comment, setcomment] = useState<string>('');
  
  const  {createComment,fetchComments}=useActions();

 const  onChangeText=(event:React.ChangeEvent<HTMLTextAreaElement>)=>{
    setcomment(event.target.value);
  }
  const onClickButton=()=>{
    fetchComments()
  }
  const onSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
   event.preventDefault();
   createComment(comment);
   setcomment('')
  }
  return (
    <>
      <form onSubmit={onSubmit}>
           <h4>Add a Comment</h4>
           <textarea value={comment} onChange={onChangeText} ></textarea>
           <div>
             <button>Submit the comment</button>
           </div>
      </form>
      <div>
        <button onClick={onClickButton} >fetch Comments</button>
      </div>
  </>

  );
}
export default autHof(CommentBox);