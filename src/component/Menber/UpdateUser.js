import API from "../API";
import { useState } from "react";
import Err from "./Err";
import { useEffect } from "react";
function UpdateUser(){
  let accessToken;
    const [input, setinput] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        level: 0,
      });
      const [avatar, setavatar] = useState();
   useEffect(() => {
        let user=localStorage.getItem("user");
        if(user){
        user=JSON.parse(user)
        setinput( {
            name:user.Auth.name,
            email:user.Auth.email,
            phone:user.Auth.phone,
            password:"",
            address:user.Auth.address,
            level: 0,
        })
       }
    },[]);
      const [err, seterr] = useState({});
      function handelInput(e) {
        seterr({});
        let NameInput = e.target.name;
        let Value = e.target.value;
        setinput({ ...input, [NameInput]: Value });
      }
      function handelfile(e) {
        const file = e.target.files;
        let reader = new FileReader();
        reader.onload = (e) => {
          setavatar(e.target.result);
        };
        reader.readAsDataURL(file[0]);
      }
      function handerSubmit(e) {
    
        e.preventDefault();
        let ErrSubmit = {};
        let Flag = true;
        let Complete = {};
        if (input.name == "") {
          ErrSubmit.name = "Vui Long Nhap Ten";
          Flag = false;
        }
        if (input.email == "") {
          ErrSubmit.Email = "Vui Long Nhap Email";
          Flag = false;
        }
        if (input.phone == "") {
          ErrSubmit.Phone = "Vui Long Nhap Phone";
          Flag = false;
        }
        if (input.address == "") {
          ErrSubmit.Address = "Vui Long Nhap Address";
          Flag = false;
        }
        if(Flag){
                let user=localStorage.getItem("user");
                if(user){
                  user=JSON.parse(user);
                  accessToken=user.token;
                let config = { 
                  headers: { 
                  'Authorization': 'Bearer '+ accessToken,
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'Accept': 'application/json'
                  } 
              };	
                const formData=new FormData();  
                    formData.append('name',input.name)
                    formData.append('email',input.email)
                    formData.append('password', input.password ? input.password  : "");
                    formData.append('phone',input.phone);
                    formData.append('address',input.address);
                    if (avatar){
                    formData.append('avatar', avatar)
                    };
                    formData.append('level',input.level)
                    API.post('/user/update/'+user.Auth.id,formData,config).then((res)=>{ 
                      if(res.data.response=="success"){
                        localStorage.setItem('user',JSON.stringify(res.data))
                        ErrSubmit.ok="Cap Nhat Thanh Cong";
                        seterr(ErrSubmit);
                      }    
                  }) 
              }
            }
            if (!Flag) {
              console.log(ErrSubmit)
              seterr(ErrSubmit);
            } 
       
      }
    return (
        <>
          <div className="col-sm-4">
            <div className="signup-form">
              <h2>Update User !</h2>
              <form onSubmit={handerSubmit}>
                <input 
                  value={input.name}
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handelInput}
                />
                <input readOnly
                  value={input.email}
                  type="email"
                  name="email"
                  placeholder="Email  "
                  onChange={handelInput}
                />
                <input
                  value={input.password}
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handelInput}
                />
                <input
                  value={input.phone}
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  onChange={handelInput}
                />
                <input
                  value={input.address}
                  type="text"
                  name="address"
                  placeholder="Address"
                  onChange={handelInput}
                />
                <input type="file" name="file" onChange={handelfile} />
                <input
                  value={input.level}
                  type="text"
                  name="level"
                  placeholder="Level"
                  onChange={handelInput}
                />
                <button type="submit" className="btn btn-default">
                  Signup
                </button>
              </form>
            </div>
          </div>
          <Err err={err} />
        </>
        
      );
}
export default UpdateUser;