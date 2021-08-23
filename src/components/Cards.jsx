import React,{useState} from 'react'
import Heart from "react-animated-heart"
const Cards = (props) => {
  const obj={ name:props.name,link:props.link}
  const [isClick, setClick] = useState(false);
 
    return (
      
        <div className="col-md-4">
        <div className="card mt-2" >
             <img src={props.link} className="card-img-top" alt="..."/>
             <div className="card-body">
               <p className="" >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center"> <button className="btn btn-primary ">Read More...</button></div>
               
               <div className="" >
               <Heart isClick={isClick} onClick={() => {props.change(obj);setClick(!isClick)} }/>
               </div>
             </div>
           </div>
            
        </div>
       </div>
    )
}
// onClick={()=>{ setHeart("heart")
export default Cards
