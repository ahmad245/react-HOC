import React, { useEffect, useRef } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector';


export default (ChildComponent:any)=> (props:any)=>{
  
  
    
        const data=  useTypedSelector((state)=>state.auth);
        const ref = useRef(false)

        useEffect(() => {
            if (!ref.current) {
                // do componentDidMount logic
                if(!data){
                   shoudGoToHom()
                  }
                ref.current = true;
              } else {
                if(!data){
                   shoudGoToHom()
                  }
                // do componentDidUpdate logic
              }
            
         
        })
        const shoudGoToHom=()=>{
            if(props.history){
                props.history.push("/")
            }
           
        }

        return (<ChildComponent {...props} />)
   
        
    
   
}


