import { useEffect } from "react";
import { useState } from "react";
import API from "../API";
function Menuleft(){
    const [category,setcategory]=useState([]);
    const [brand,setbrand]=useState([]);
    useEffect(() => {
      API.get('/category-brand').then((res)=>{
        setcategory(res.data.category)
        setbrand(res.data.brand)
      })
    }, []);
    function Render_Category(arr){
        if(arr.length>0){
            return arr.map((value,key)=>{
                return(
                    <div key={key} className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
                                    <span className="badge pull-right"><i className="fa fa-plus"></i></span> {value.category}
                                </a>
                            </h4>
                        </div>
                        <div id="sportswear" className="panel-collapse collapse">
                            <div className="panel-body">
                                <ul>
                                    <li><a href="#">Nike </a></li>
                                    <li><a href="#">Under Armour </a></li>
                                    <li><a href="#">Adidas </a></li>
                                    <li><a href="#">Puma</a></li>
                                    <li><a href="#">ASICS </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }
    function Render_Brand(arr){
        if(arr.length>0){
            return arr.map((value,key)=>{
                return(
                    <li key={key}>
                        <a href="#"> <span className="pull-right">(50)</span>{value.brand}</a>
                    </li>
                )
            })
        }
    }
    return(
        <div className="col-sm-3">
        <div className="left-sidebar">
            <h2>Category</h2>
            <div className="panel-group category-products" id="accordian">
                    {Render_Category(category)}
            </div>
      

            <div className="brands_products">
           
                <h2>Brands</h2>
                <div className="brands-name">
                    <ul className="nav nav-pills nav-stacked">
                       {Render_Brand(brand)}
                    </ul>
                </div>
            </div>
            <div className="shipping text-center">
        
                <img src="image/home/shipping.jpg" alt="" />
            </div>


        </div>
    </div>
    )
}
export default Menuleft;