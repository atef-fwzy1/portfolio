import Button from "../Button/Button"
import React from 'react';
import Lottie from "lottie-react";
import doneAnimation from"../../animation/doneAnimation.json"
import emailAnimation from "../../animation/EmailAnimation .json"
import { useForm, ValidationError } from '@formspree/react';
import"./ContactUs.css"
export default function ContactUs(){

  const [state, handleSubmit] = useForm("movjzlqz");
  if (state.succeeded) {
     console.log("message")
  }
    return(
        <>
        
            <div className="headerBox" id="contact">
            <i class="fa-solid fa-comment"></i>
                <h2 className="header">Contact Me</h2>
             </div>
        <div className="contactBox">
 <div class="container" >
	    
	<div class="row">
			<h4 style={{textAlign:"center"}}>We'd love to hear from you!</h4>
	</div>
	<form class="row input-container" onSubmit={handleSubmit}>
			<div class="col-xs-12">
				<div class="styled-input wide">
					<input    id="name" type="name" name="name" required />
					 <ValidationError 
            prefix="name" 
            field="name"
            errors={state.errors}
             />
					<label>Name</label> 
				</div>
			</div>
			<div className="row">
			<div class="rows">
				<div class="styled-input">
					<input type="email" required   id="email" name="email"/>
							 <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
             />
					<label>Email</label> 
				</div>
			</div>
			
			</div>
			<div class="col-xs-12">
				<div class="styled-input wide">
					<textarea required  id="message" type="message" name="message" ></textarea>
							 <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
             />
					<label>Message</label>
				</div>
			</div>
			
				 <Button value={"Send Message"}/>
	</form>
				{ state.succeeded && <h3 className="messageDone"> <Lottie style={{width:"25px"}} animationData={doneAnimation} /> your  messsage has been sent  successfully</h3>}
</div>
          <div className="emailAnimation">
			     <Lottie style={{width:"90%"}} animationData={emailAnimation} /> 

		  </div>
        </div>
        </>


    )
}