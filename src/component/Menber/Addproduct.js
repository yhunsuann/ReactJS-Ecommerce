import { useEffect,useState } from "react";
import Err from "./Err";
import API from "../API"
import { useNavigate } from "react-router-dom";
function Addproduct() {
    let accessToken;
    const navigate=useNavigate();
    const [input, setinput] = useState({
        name: "",
        price: "",
        Category: "",
        Brand: "",
        Sale: "",
        phantram: "",
        ComanyProfile: "",
        Detail: "",
        Status:0,
      });
      let obj={};
      const [avatar, setavatar] = useState({});
      const [categorys,setcategorys]=useState([]);
      const [brands,setbrands]=useState([]);
      const [err, seterr] = useState({});
      const [file, setfile] = useState();
      const [id_category,setid_category]=useState(1);
      const [id_brand,setid_brand]=useState(1)
      let flag=false;
      useEffect(() => {
        API.get("/category-brand").then((res)=>{
          setcategorys(res.data.category);
          setbrands(res.data.brand)
        })
      }, []);

      function handelInput(e) {
        seterr({});
        let NameInput = e.target.name;
        let Value = e.target.value;
        setinput({ ...input, [NameInput]: Value });
      }
      function handelinputbrand(e){
        setid_brand(e.target.value)
      }
      function handelinputcategory(e){
        setid_category(e.target.value)
      }
      function handelfile(e) {
      const file = e.target.files;
        setavatar(file);
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
        if (input.ComanyProfile == "") {
          ErrSubmit.Email = "Vui Long Nhap ComanyProfile";
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
        if (input.Detail == "") {
          ErrSubmit.Address = "Vui Long Nhap Detail";
          Flag = false;
        }
        if(avatar.length>3){
          ErrSubmit.avarta = "Vui long chon duoi 3 anh";
          Flag = false;
        }else {
          Object.keys(avatar).map((value,key)=>{
            if (avatar[key].type.substring(0, 5) != "image") {
              ErrSubmit.filea = "file chon buoc phai la file anh";
              Flag = false;
            }
            if (avatar[key].size > 1024 * 1024) {
              ErrSubmit.file = "file anh phai duoi 1mb";
              Flag = false;
            }
          })
       
        }
        if(!Flag){
          seterr(ErrSubmit)
        }
        
        if(Flag){
          let user=localStorage.getItem("user");
          if(user){
            user=JSON.parse(user);
            accessToken=user.token;
          }
          let config = { 
            headers: { 
            'Authorization': 'Bearer '+ accessToken,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
            } 
        };	

        if(input.Status==1){
          input.price=Number(input.price)*(Number(input.phantram)/100);
          flag=true;
        }
          const formData=new FormData();  
     
              formData.append('name',input.name)
              formData.append('category', id_category);
              formData.append('brand',id_brand);
              formData.append('company',input.ComanyProfile);
              formData.append('detail',input.Detail);
              formData.append('company',input.Status);
                if(flag){
                formData.append('company',input.sale);
                }
              formData.append('price',input.price)
              if(Object.keys(avatar).length>0){
                Object.keys(avatar).map((value,key)=>{
                  formData.append('file[]',avatar[key])
                })
              }
              API.post('/user/product/add',formData,config).then((res)=>{ 
                if(res.data.response=="success"){
                  ErrSubmit.ok="Them Thanh Cong";
                  seterr(ErrSubmit);
                  navigate("/Account/myproduct")
                }  
            }) 
            
        }
      }
        
    

  function render(arr){
      if(arr.length>0){
        return arr.map((value,key)=>{
          return(
            <option key={key} value={value.id}>{(value.category)?value.category:value.brand}</option>
          )
        })
      }    
    }
    function render_sale(){
      if(input.Status==1){
        return(
          <input
          value={input.phantram}
          type="number"
          name="phantram"
          placeholder="%"
          onChange={handelInput}
        />
        )
      }
    }
    return ( 
        <>
        <div className="col-sm-4">
          <div className="signup-form">
            <h2>Create product !</h2>
            <form onSubmit={handerSubmit}>
              <input 
                value={input.name}
                type="text"
                name="name"
                placeholder="Name"
                onChange={handelInput}
              />
              <input
                value={input.price}
                type="number"
                name="price"
                placeholder="Price"
                onChange={handelInput}
              />
                <select name="Category" onChange={handelinputcategory}>
                    {render(categorys)}
                </select>
                <select name="Brand" onChange={handelinputbrand}>
                    {render(brands)}
                </select>
             <select name="Status" onChange={handelInput}>
                    <option value="0">Click Sale</option>
                    <option value="1">Sale</option>
                </select>
              {render_sale()}
               <input
                value={input.ComanyProfile}
                type="text"
                name="ComanyProfile"
                placeholder="ComanyProfile"
                onChange={handelInput}
              />
              <input type="file" multiple  name="file" onChange={handelfile} />
              <textarea
                value={input.Detail}
                type="text"
                name="Detail"
                placeholder="Detail"
                onChange={handelInput}
              />
              <button  type="submit" className="btn btn-default">
                Signup
              </button>
            </form>
          </div>
        </div>
        <Err err={err} />
      
      </>
    )
}
export default Addproduct;