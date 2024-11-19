import {Link} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import API from '../API';
function Index(){
	const [data, setdata] = useState({});
	useEffect(() => {
		API.get("blog").then(res=>{
			setdata(res.data.blog.data)
			// console.log(res.data.blog.data)
		})
		;
	},[]);
	
	function renderhmlt(){
		if(data.length>0){
		return data.map((value,key)=>{
			return(
					<div key={key}>
						<div key={key} className="single-blog-post">
							<h3>{value.title}</h3>
							<div className="post-meta">
								<ul>
									<li><i className="fa fa-user"></i> Mac Doe</li>
									<li><i className="fa fa-clock-o"></i> 1:33 pm</li>
									<li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
								</ul>
								<span>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-half-o"></i>
								</span>
							</div>
							<a href="">
								<img src={"http://localhost/laravel8/public/upload/Blog/image/"+value.image} alt=""></img>
							</a>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
							<Link  className="btn btn-primary" to={"/Blog/Detail/"+value.id}>Read More</Link>
						</div>
						<div className="pagination-area">
							<ul className="pagination">
								<li><a href="" className="active">1</a></li>
								<li><a href="">2</a></li>
								<li><a href="">3</a></li>
								<li><a href=""><i className="fa fa-angle-double-right"></i></a></li>
							</ul>
						</div>
						</div>
			)
		})
	}
	
	}
    return(
		<div className="col-sm-9">
		<div className="blog-post-area">
			<h2 className="title text-center">Latest From our Blog</h2>
				{renderhmlt()}
					</div>
			</div>
    )
}
export default Index;