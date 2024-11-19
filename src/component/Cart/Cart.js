import Content_cart from "./Content_cart";
import { useEffect } from "react";
import { useState } from "react";
import API from "../API";
import { UserContext } from "../../UserContext";
import { useContext } from "react";
function Cart() {
    const [data,setdata]=useState([]);
    const value=useContext(UserContext)
	useEffect(() => {		
        loaddata();
	}, []);
	function loaddata(){
		let a = localStorage.getItem('dataproduct')
		if(a){
			a=JSON.parse(a);
			API.post('/product/cart',a).then((res)=>{
			setdata(res.data.data)
			})
		}
	}
    function renderTotal(){
        if(data.length>0){
            let sum=0;
            let total=0;
            data.map((value,key)=>{
            let qty=value.qty.qty;
            sum=qty*value.price;
            total+=sum;
             })
            return(
                <li>Total<span className="sum_total">{total}</span></li>
            )
        }
        
    }
    return (
        <>
        <Content_cart fun={loaddata} dt={data}/>
        <section id="do_action">
        <div className="container">
            <div className="heading">
                <h3>What would you like to do next?</h3>
                <p>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</p>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="chose_area">
                        <ul className="user_option">
                            <li>
                                <input type="checkbox"></input>
                                <label>Use Coupon Code</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label>Use Gift Voucher</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label>Estimate Shipping & Taxes</label>
                            </li>
                        </ul>
                        <ul className="user_info">
                            <li className="single_field">
                                <label>Country:</label>
                                <select>
									<option>United States</option>
									<option>Bangladesh</option>
									<option>UK</option>
									<option>India</option>
									<option>Pakistan</option>
									<option>Ucrane</option>
									<option>Canada</option>
									<option>Dubai</option>
								</select>

                            </li>
                            <li className="single_field">
                                <label>Region / State:</label>
                                <select>
									<option>Select</option>
									<option>Dhaka</option>
									<option>London</option>
									<option>Dillih</option>
									<option>Lahore</option>
									<option>Alaska</option>
									<option>Canada</option>
									<option>Dubai</option>
								</select>

                            </li>
                            <li className="single_field zip-field">
                                <label>Zip Code:</label>
                           
                            </li>
                        </ul>
                        <a className="btn btn-default update" href="">Get Quotes</a>
                        <a className="btn btn-default check_out" href="">Continue</a>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="total_area">
                        <ul>
                            <li>Cart Sub Total <span>$59</span></li>
                            <li>Eco Tax <span>$2</span></li>
                            <li>Shipping Cost <span>Free</span></li>
                            {renderTotal()}
                        </ul>
                        <a className="btn btn-default update" href="">Update</a>
                        <a className="btn btn-default check_out" href="">Check Out</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    )
}
export default Cart;