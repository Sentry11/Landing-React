
import React, { Component } from 'react';


import '../style.css'


class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        console.log('mail was submitted: ' + this.state.value);
        event.preventDefault();
      
      }
     
render(){
    return(
            <section className="signup-section" id="signup">
             <div className="container px-4 px-lg-5">
              <div className="row gx-4 gx-lg-5">
               <div className="col-md-10 col-lg-8 mx-auto text-center">
                 <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
                  <h2 className="text-white mb-5">Want to ask a question? - Send me your email and I will contact you</h2>

            <form onSubmit={this.handleSubmit} className="form-signup" id="contactForm">
                    <div className="row input-group-newsletter" id="contactForm">
                     <div className="col">
                      <input className="form-control" id="emailAddress" type="email" aria-label="Enter email address..." data-sb-validations="required,email" placeholder="Enter email address..." value={this.state.value} onChange={this.handleChange} /></div>
                       <div className="col-auto">   <button className="btn btn-primary " id="submitButton" type="submit" value="Submit" >Notify Me!</button></div>
                     </div>
                {/* Submit success message */}
                {/* This is what your users will see when the form
                has successfully submitted */}
                {/* <div className="d-none" id="submitSuccessMessage">
                    <div className="text-center mb-3 mt-2 text-white">
                        <div className="fw-bolder">Form submission successful!</div>
                    </div>
                </div> */}
                {/* Submit error message
            
                This is what your users will see when there is
                an error submitting the form */}
                {/* <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3 mt-2">Error sending message!</div></div> */}
              </form>
                 </div>
               </div>
              </div>
            </section>
         )
     }
}

export default Signup;