import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector';

const CommentList=()=>{
    const data=  useTypedSelector((state)=>state.comments.comments);
    return (
        <div>
            {data.map((comment)=><div key={comment}>{comment}</div>)}
        </div>
    )
}

export default CommentList