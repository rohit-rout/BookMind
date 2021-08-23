import React from 'react'
import Image from '../Images/bookstack.jpg'
import { NavLink } from 'react-router-dom'
const Home = () => {
    return (<>
        <section id="header" className=" d-flex align-items-center" >
          <div className="container-fluid " >
            <div className="row" >
              <div className="col-10 mx-auto" >
               <div className="row" >
                     <div className=" col-md-6  pt-5 pt-lg-0 order-2 order-lg-1" >
                     <h1> Grow and shine with  <strong>BookMind<i className="fas fa-brain"></i> </strong></h1>
                     <h2 className="my-3"> Enjoy stories from any corner of the world</h2>
                      <div className="mt-3">

                         <NavLink className="get_started btn btn-outline-dark" to="/books"> Get Started </NavLink> </div>
                </div>
                 <div className="animated col-lg-6 order 1 order-lg-2" >
                     <img className="img-fluid " alt="" src={Image} />
                 </div>
              </div> 
            </div> 
           </div>

        </div>

        </section>  </>)
}







export default Home