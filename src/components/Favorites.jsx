import React from 'react'
import Cards from './Cards'
const Favorites = (props) => {
    const ar=props.favBooks;
    return (
        <div className="container-fluid">
        <h3 className="my-5 text-center">Your Favourites</h3>    
        <div className="row">
         
           {ar.length?ar.map((val,index)=>{
              return <Cards  key={index} name={val.name} link={val.link}></Cards>
                
                
           }):<h2>oops you didn't selected any :(</h2>}
           </div>
           </div>

    
    )
}

export default Favorites
