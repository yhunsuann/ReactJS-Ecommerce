import API from "../API";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { useDispatch } from "react-redux";
function Content_cart(props){
	let loaddata=props.fun;
	let data=props.dt;
	const dispatch=useDispatch
	let valuelocal = localStorage.getItem('dataproduct')
	valuelocal=JSON.parse(valuelocal);
	const value=useContext(UserContext)
	
	useEffect(() => {		
		loaddata();
	}, []);
	function down_qty(qty,id){
		qty-=1;
		if(qty==0){
			delete_product_cart(id);
		}else{
			valuelocal[id]['qty']=qty;
			localStorage.setItem('dataproduct',JSON.stringify(valuelocal))				
			loaddata();
		}
		value.renderNumber(valuelocal);
		
	}
	function up_qty(qty,id){
		qty+=1;
		valuelocal[id]['qty']=qty;
		localStorage.setItem('dataproduct',JSON.stringify(valuelocal))	
		loaddata();
		value.renderNumber(valuelocal);
		
	}
	function delete_product_cart(id){
		delete valuelocal[id];
		localStorage.setItem('dataproduct',JSON.stringify(valuelocal))
		loaddata();
		value.renderNumber(valuelocal);
		
	}
	function render(){
		if(data.length>0){
			return data.map((value,key)=>{
				let qty=value.qty.qty
				let sum=qty*value.price;
				let img=JSON.parse(value.image);
				return(
					<tr key={key}>
							<td className="cart_product">
								<a href=""><img src={"http://localhost/laravel8/public/upload/product/"+value.id_user+"/"+img[0]} alt=""></img></a>
							</td>
							<td className="cart_description">
								<h4><a href="">{value.name}</a></h4>
								<p>Web ID: 1089772</p>
							</td>
							<td className="cart_price">
								<p>${value.price}</p>
							</td>
							<td className="cart_quantity">
								<div className="cart_quantity_button">
									<a className="cart_quantity_up" onClick={()=>{up_qty(qty,value.id)}}> + </a>
									<input readOnly className="cart_quantity_input" type="text" name="quantity" value={qty} autoComplete="off" size="2"></input>
									<a className="cart_quantity_down" onClick={()=>{down_qty(qty,value.id)}} > - </a>
								</div>
							</td>
							<td className="cart_total">
								<p className="cart_total_price">${sum}</p>
							</td>
							<td className="cart_delete">
								<a className="cart_quantity_delete" onClick={()=>{delete_product_cart(value.id)}} ><i className="fa fa-times"></i></a>
							</td>
					</tr>
				)
			})
		}
	}
    return(
		<section id="cart_items">
        <div className="container">
            <div className="breadcrumbs">
                <ol className="breadcrumb">
                    <li><a href="#">Home</a></li>
                    <li className="active">Shopping Cart</li>
                </ol>
            </div>
            <div className="table-responsive cart_info">
                <table className="table table-condensed">
                    <thead>
                        <tr className="cart_menu">
                            <td className="image">Item</td>
                            <td className="description"></td>
                            <td className="price">Price</td>
                            <td className="quantity">Quantity</td>
                            <td className="total">Total</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
						{render()}
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    )
	
}
export default Content_cart;




