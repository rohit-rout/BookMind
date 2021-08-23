import React from 'react'

const Contribute = () => {
  
    return (
        <div  className="container my-5">
        <div className="text-center mb-5" >
            <h4>SHARE YOUR BOOK REVIEWS WITH US!</h4>
        </div>
        <form >
        <div className="row">
             <div className="col-md-6 col-10 mx-auto">
             <div className="mb-3">
               <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                 <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Full Name"/>
              </div>
              <div className="mb-3">
               <label for="exampleFormControlInput1" className="form-label">Book Name</label>
                 <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Book Name You want to review"/>
              </div>
             <div className="mb-3">
               <label for="exampleFormControlInput1" className="form-label">Email address</label>
                 <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Email"/>
              </div>

                  <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">
                    A short book Review
                    </label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3">
                    </textarea>
                 </div>
                 <button onClick={()=>alert("Thanks Your data is submitted! We will process it soon! ")} className="btn btn-outline-primary">Submit</button>
                
          </div>
        </div>
        </form>
        </div>
      
    )
}

export default Contribute;
