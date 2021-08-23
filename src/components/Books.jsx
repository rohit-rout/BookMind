import React from 'react'
import  Cards from './Cards'
import Image1 from '../Images/HowToHelpYourself.jpg'
import Image2 from '../Images/ThinkingFastAndSlow.jpg'
import Image3 from '../Images/HowToBeFine.jpg'
import Image4 from '../Images/GeorgeMartin.jpg'
import Image5 from '../Images/LordOfTheRings.jpg'
import Image6 from '../Images/MakingIndiaAwesome.jpg'
import Image7 from '../Images/OneIndianGirl.jpg'
// import {useState,useEffect} from 'react';
const Books = (props) => {

    return (
    <div className="mt-5 " >
    <h2 className="text-center mb-5">A worldwide Book Collection </h2>
    <div className="row" >
         <div className="col-md-10 mx-auto  " >
            <div className="row" >
               <Cards name="subtle"  change={props.change} link={Image1}/>
               <Cards name="art"  change={props.change} link={Image2}/>
               <Cards name="of"  change={props.change} link={Image3}/>
               <Cards name="not"  change={props.change} link={Image4}/>
               <Cards name="giving"  change={props.change} link={Image5}/>
               <Cards name="the"  change={props.change} link={Image6}/>
               <Cards name="fuck"  change={props.change} link={Image7}/>
            </div> 
         </div> 
    </div>
    </div>)
    }

    export default Books