import { useState } from "react";
import Err from "./Err";
import API from "../API";
import { useNavigate } from "react-router-dom";
function Login(){
	const navigate=useNavigate();
	const [input, setinput] = useState({
		email:"",
		password:"",
		level:""
	});
	const [err, seterr] = useState({});
	function handelInput(e){
		seterr({});
		let nameInput=e.target.name;
		let valueInput=e.target.value;
		setinput({...input,[nameInput]:valueInput})
	}
	function handelSubmit(e){
		e.preventDefault();
		let errSubmit={};
		let flag=true;
		let complete={};
		if(input.email==""){
			errSubmit.name="Vui Long Nhap name";
			flag=false;
		}
		if(input.password==""){
			errSubmit.password="vui long nhap PassWord"
			flag=false;
		}
		if(!flag){
			seterr(errSubmit);
		}else{
			API.post("/login",input).then((res)=>{
				if(res.data.success=="success"){
					console.log(res.data)
					let user=res.data.Auth
					let checkLg=true;
					complete.ok="dang nhap thanh cong";
					seterr(complete);
					localStorage.setItem('data',checkLg)
					localStorage.setItem('user',JSON.stringify(res.data))
					localStorage.setItem('password',input.password)
					navigate('/');
				}else{
					seterr(res.data.errors)
				}
			
			}).catch(error=> console.log(error))
		}
	}

    return(
		<>
		   <div className="col-sm-4 col-sm-offset-1">
					<div className="login-form">
						<h2>Login to your account</h2>
						<form  onSubmit={handelSubmit}>
							<input value={input.email} type="email" name="email" onChange={handelInput} placeholder="email"/>
							<input value={input.password} type="password" name="password" onChange={handelInput} placeholder="PassWord"/>
							<input value={input.level} type="password" name="level" onChange={handelInput} placeholder="level"/>
							<span>
								<input type="checkbox" className="checkbox"/>
								Keep me signed in
							</span>
							<button type="submit" className="btn btn-default">Login</button>
						</form>
					</div>
				</div>
				<Err err={err}/>
		</>
     
    )
}
export default Login;