import { Link } from "react-router-dom";
import API from "../API";
import { useEffect } from "react";
import { useState } from "react";
import EditProduct from "./EditProduct";
function CreateProduct(){
    const [myproduct,setmyproduct]=useState({});
    let accessToken;
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
    }
    useEffect(() => {
        Getdata();
    }, []);
    function Getdata(){
        API.get('/user/my-product',config).then((res)=>{
            setmyproduct(res.data.data)
        })
    }
    function Render(obj){
       if( Object.keys(obj).length>0){
        return Object.keys(obj).map((key,value)=>{
            let avatar=JSON.parse(obj[key]['image'])
            return(
                <tr key={key}>
                <td className="id_value">{obj[key]['id']}</td>
                <td className="name_value">{obj[key]['name']}</td>
                <td className="image_value"><img className="anhproduct" src={"http://localhost/laravel8/public/upload/product/"+obj[key]['id_user']+"/"+avatar[0]}/></td>
                <td className="price_value">{obj[key]['price']}</td>
                <td className="action_value"><Link to={"/product/edit/"+obj[key]['id']}>Edit</Link></td>
                <td><button onClick={()=>DeleteProduct(obj[key]['id'])}>X</button></td>
                 </tr>
            )
        })
       }
     
    }
    function DeleteProduct(id){
        API.get('/user/delete-product/'+id,config).then((res)=>{
            if(res.data.response=="success"){
                Getdata();
            }
        })
    }
    return(
        <div className="col-sm-9 padding-right">
                <table className="table table-condensed">
                                <thead>
                                    <tr className="cart_menu">
                                        <td className="id">ID</td>
                                        <td className="name">NAME</td>
                                        <td className="image">IMAGE</td>
                                        <td className="price">PRICE</td>
                                        <td className="action">ACTION</td>
                                    </tr>
                                </thead>
                                <tbody>
                                        {Render(myproduct)}
                                </tbody>
                            </table>
                        <button>
                            <Link to={"/Account/addProduct"}>ADD NEW</Link>
                        </button>
                </div>

    )
}
export default CreateProduct;