import React,{useState} from 'react';
import './login.css';
import {AiFillEyeInvisible,AiFillEye} from 'react-icons/ai';

export default function SignUp() {
	const [passwordEye,setPasswordEye]=useState(false);

	const handlepasswordclick=()=>{
		setPasswordEye(!passwordEye)
	}
	const [confirmpasswordEye,setconfirmPasswordEye]=useState(false);

	const handleconfirmpasswordclick=()=>{
		setconfirmPasswordEye(!confirmpasswordEye)
	}

	const [details,setDetails]=useState({name:"",email:"",password:"",confirmpass:""});
	const submitHandler=e=>{
	  e.preventDefault();
	console.log(details)
	}
  return(
    <div>
<div class="container">
	<div class="screen">
		<div class="screen__content">
			<form class="login" onSubmit={submitHandler}>
      <div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="User name " name="name" onChange={e=>setDetails({...details,name:e.target.value}) }  value={details.name}></input>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder=" Email" name='email' onChange={e=>setDetails({...details,email:e.target.value}) }  value={details.email} ></input>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type={(passwordEye===false)?'password':'text'} class="login__input" placeholder="Password"  name='password' onChange={e=>setDetails({...details,password:e.target.value}) }  value={details.password}></input>
				</div>
				<div >
				{
					(passwordEye===false)?<AiFillEyeInvisible onClick={handlepasswordclick}></AiFillEyeInvisible>:<AiFillEye onClick={handlepasswordclick}></AiFillEye>
				}
				
				</div>
        <div class="login__field">

					<i class="login__icon fas fa-lock"></i>
					<input type={(passwordEye===false)?'password':'text'} class="login__input" placeholder="Confirm Password" name='confirmpass' onChange={e=>setDetails({...details,confirmpass:e.target.value}) }  value={details.confirmpass}></input>
				</div>
				<div >
				{
					(confirmpasswordEye===false)?<AiFillEyeInvisible onClick={handleconfirmpasswordclick}></AiFillEyeInvisible>:<AiFillEye onClick={handleconfirmpasswordclick}></AiFillEye>
				}
				
				</div>
     
				<button class="button login__submit" >
					<span class="button__text">Sign Up Now</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			{/* <div class="social-login">
				<h3>log in via</h3>
				<div class="social-icons">
					<a href="#" class="social-login__icon fab fa-instagram"></a>
					<a href="#" class="social-login__icon fab fa-facebook"></a>
					<a href="#" class="social-login__icon fab fa-twitter"></a>
				</div>
			</div> */}
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
</div>

  )
}
