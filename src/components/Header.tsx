import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useAction';
import { Link } from 'react-router-dom';

const Header=()=>{
    const data=  useTypedSelector((state)=>state.auth);
    const  {auth}=useActions();
    const renderAuthBtn=()=>{
         if(data) return 'Signout';
         return 'Signin'
    }
    const onClickAuth=()=>{
    
       auth(!data)
    }
    return(
        <header>

        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/edit" >CommentBox</Link></li>
          <button onClick={onClickAuth} >{renderAuthBtn()}</button>
        </ul>
      </header>
    )
}

export default Header;