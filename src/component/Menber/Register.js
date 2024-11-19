import { useState } from "react";
import Index from "./Index";
import { useEffect } from "react";
import Err from "./Err";
import API from "../API";


function Register() {

  const [input, setinput] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    level: 0,
  });
  const [file, setfile] = useState();
  const [err, seterr] = useState({});
  const [avatar, setavatar] = useState();
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
      setfile(file[0]);
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
    if (input.password == "") {
      ErrSubmit.Password = "Vui Long Nhap Password";
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
    if (input.level == "") {
      ErrSubmit.Level = "Vui Long Nhap Level";
      Flag = false;
    }
    if (file == null) {
      ErrSubmit.file = "vui long chon file";
      Flag = false;
    } else {
      if (file.type.substring(0, 5) != "image") {
        ErrSubmit.file = "file chon buoc phai la file anh";
        Flag = false;
      }
      if (file.size > 1024 * 1024) {
        ErrSubmit.file = "file anh phai duoi 1mb";
        Flag = false;
      }
    }
    if (!Flag) {
      seterr(ErrSubmit);
    } else {
      let data = {
        ...input,
        avatar: avatar,
      };
      API.post("/register", data).then((res) => {
        console.log(res.data)
        if (res.data.message == "success") {
          Complete.ok = "Tao tk thanh cong";
          seterr(Complete);
        } else {
          seterr(res.data.errors);
        }
      });
    }
   
  }
  return (
    <>
      <div className="col-sm-4">
        <div className="signup-form">
          <h2>New User Signup!</h2>
          <form onSubmit={handerSubmit}>
            <input
              value={input.name}
              type="text"
              name="name"
              placeholder="Name"
              onChange={handelInput}
            />
            <input
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
export default Register;
