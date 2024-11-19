import { useEffect } from "react";
import API from "../API";
import { useParams } from "react-router-dom";
import { useState } from "react";
function ProductDetail(){
	
    let params = useParams();
    const [data,setdata]=useState({});
	const [imagebig,setimagebig]=useState({})
    useEffect(() => {
      API.get('/product/detail/'+params.id).then((res)=>{
        setdata(res.data.data)
		let a=JSON.parse(res.data.data.image)
		console.log(res.data.data.image)
		setimagebig(a[0]);
      })
    }, []);
   
    function render(){
        if(Object.keys(data).length>0){
			if(imagebig){			
			let img=JSON.parse(data.image);
			
              return(
                    <div className="product-details">
						<div className="col-sm-5">
							<div className="view-product">
								<img src={"http://localhost/laravel8/public/upload/product/"+data['id_user']+"/"+imagebig} alt=""></img>
								<a href="images/product-details/1.jpg" rel="prettyPhoto"><h3>ZOOM</h3></a>
								
							</div>
							<div id="similar-product" className="carousel slide" data-ride="carousel">
								    <div className="carousel-inner">
										<div className="item next left">
                                                {renderlistImg(img)}
										</div>
										<div className="item">                     
                                                {renderlistImg(img)}
										</div>
										<div className="item active left">
                                                {renderlistImg(img)}
										</div>
									
									</div>


							
								  <a className="left item-control" href="#similar-product" data-slide="prev">
									<i className="fa fa-angle-left"></i>
								  </a>
								  <a className="right item-control" href="#similar-product" data-slide="next">
									<i className="fa fa-angle-right"></i>
								  </a>
							</div>
					
						</div>
						<div className="col-sm-7">
							<div className="product-information">
								<img src="images/product-details/new.jpg" className="newarrival" alt=""></img>
								<h2>{data.name}</h2>
								<p>Web ID: 1089772</p>
								<img src="images/product-details/rating.png" alt=""></img>
								<span>
									<span>US ${data.price}</span>
									<label>Quantity:</label>
									<input readOnly type="text" value="3"></input>
									<button readOnly  type="button" className="btn btn-fefault cart">
										<i className="fa fa-shopping-cart"></i>
										Add to cart
									</button>
								</span>
								<p><b>Availability:</b> In Stock</p>
								<p><b>Condition:</b> New</p>
								<p><b>Brand:</b> E-SHOPPER</p>
								<a href=""><img src="images/product-details/share.png" className="share img-responsive" alt=""></img></a>
							</div>
						</div>
					</div>
					
              )
        }
	}
    }
	function changeimage(img){
		setimagebig(img);
	}
	function renderlistImg(img){
		if(img.length>0){
			return img.map((value,key)=>{
			
				if(key==0){
					return(
						<a onClick={()=>{changeimage(value)}}  key={key}><img  src={"http://localhost/laravel8/public/upload/product/"+data['id_user']+"/small_"+value} alt=""></img></a>   
					)
					
				}
				if(key==1){
					return(
						<a onClick={()=>{changeimage(value)}}  key={key}><img  src={"http://localhost/laravel8/public/upload/product/"+data['id_user']+"/larger_"+value} alt=""></img></a>   
					)
				}
				if(key==2){
					return(
						<a onClick={()=>{changeimage(value)}}  key={key}><img  src={"http://localhost/laravel8/public/upload/product/"+data['id_user']+"/"+value} alt=""></img></a>   
					)
				}
						
			})
		}

	}
    return(
        <div className="col-sm-9 padding-right">
                    {render()}
					<div className="category-tab shop-details-tab">
						<div className="col-sm-12">
							<ul className="nav nav-tabs">
								<li><a href="#details" data-toggle="tab">Details</a></li>
								<li><a href="#companyprofile" data-toggle="tab">Company Profile</a></li>
								<li><a href="#tag" data-toggle="tab">Tag</a></li>
								<li className="active"><a href="#reviews" data-toggle="tab">Reviews (5)</a></li>
							</ul>
						</div>
						<div className="tab-content">
							<div className="tab-pane fade" id="details">
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/gallery1.jpg" alt=""></img>
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/gallery2.jpg" alt=""></img>
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/gallery3.jpg" alt=""></img>
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/gallery4.jpg" alt=""></img>
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className="tab-pane fade" id="companyprofile">
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/gallery1.jpg" alt=""></img>
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/gallery3.jpg" alt=""></img>
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/gallery2.jpg" alt=""></img>
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/gallery4.jpg" alt=""></img>
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className="tab-pane fade" id="tag">
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/gallery1.jpg" alt=""></img>
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/gallery2.jpg" alt=""></img>
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/gallery3.jpg" alt=""></img>
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/gallery4.jpg" alt=""></img>
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className="tab-pane fade active in" id="reviews">
								<div className="col-sm-12">
									<ul>
										<li><a href=""><i className="fa fa-user"></i>EUGEN</a></li>
										<li><a href=""><i className="fa fa-clock-o"></i>12:41 PM</a></li>
										<li><a href=""><i className="fa fa-calendar-o"></i>31 DEC 2014</a></li>
									</ul>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
									<p><b>Write Your Review</b></p>
									
									<form action="#">
										<span>
											<input readOnly  type="text" placeholder="Your Name"></input>
											<input readOnly type="email" placeholder="Email Address"></input>
										</span>
										<textarea name=""></textarea>
										<b>Rating: </b> <img src="images/product-details/rating.png" alt=""></img>
										<button type="button" className="btn btn-default pull-right">
											Submit
										</button>
									</form>
								</div>
							</div>
							
						</div>
					</div>
					
					<div className="recommended_items">
						<h2 className="title text-center">recommended items</h2>
						
						<div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
							<div className="carousel-inner">
								<div className="item next left">	
									<div className="col-sm-4">
										<div className="product-image-wrapper">
											<div className="single-products">
												<div className="productinfo text-center">
													<img src="images/home/recommend1.jpg" alt=""></img>
													<h2>$56</h2>
													<p>Easy Polo Black Edition</p>
													<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
												</div>
											</div>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="product-image-wrapper">
											<div className="single-products">
												<div className="productinfo text-center">
													<img src="images/home/recommend2.jpg" alt=""></img>
													<h2>$56</h2>
													<p>Easy Polo Black Edition</p>
													<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
												</div>
											</div>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="product-image-wrapper">
											<div className="single-products">
												<div className="productinfo text-center">
													<img src="images/home/recommend3.jpg" alt=""></img>
													<h2>$56</h2>
													<p>Easy Polo Black Edition</p>
													<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="item active left">	
									<div className="col-sm-4">
										<div className="product-image-wrapper">
											<div className="single-products">
												<div className="productinfo text-center">
													<img src="images/home/recommend1.jpg" alt=""></img>
													<h2>$56</h2>
													<p>Easy Polo Black Edition</p>
													<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
												</div>
											</div>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="product-image-wrapper">
											<div className="single-products">
												<div className="productinfo text-center">
													<img src="images/home/recommend2.jpg" alt=""></img>
													<h2>$56</h2>
													<p>Easy Polo Black Edition</p>
													<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
												</div>
											</div>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="product-image-wrapper">
											<div className="single-products">
												<div className="productinfo text-center">
													<img src="images/home/recommend3.jpg" alt=""></img>
													<h2>$56</h2>
													<p>Easy Polo Black Edition</p>
													<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							 <a className="left recommended-item-control" href="#recommended-item-carousel" data-slide="prev">
								<i className="fa fa-angle-left"></i>
							  </a>
							  <a className="right recommended-item-control" href="#recommended-item-carousel" data-slide="next">
								<i className="fa fa-angle-right"></i>
							  </a>			
						</div>
					</div>
					
				</div>
             
           
    )

}

export default ProductDetail;