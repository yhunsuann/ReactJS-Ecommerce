import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../API";
import ListComment from "./ListComment";
import Comment from "./Comment";
function Details() {
  let params = useParams();
  const [data, setdata] = useState({});
  const [comment,setcomment]=useState({});
  const [reply,setreply]=useState(0);
  
  useEffect(() => {
    getData()
  },[]);
  function getData(){
	API.get("/blog/detail/"+ params.id).then((res) => {
			setdata(res.data.data);
		if(!res.data.data.comment==false){
 	  	setcomment(res.data.data.comment)
	  	}
 	 });
  }
  function checkReply(data){
	setreply(data)
  }

  function Render(){
	if(Object.keys(data).length>0){
				return(
					<>
					<div className="single-blog-post">
								<h3>Girls Pink T Shirt arrived in store</h3>
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
									<img src={"http://localhost/laravel8/public/upload/Blog/image/"+data.image} alt=""></img>
								</a>
								<p>{data.content}</p>
								<div className="pager-area">
									<ul className="pager pull-right">
										<li><a href="#">Pre</a></li>
										<li><a href="#">Next</a></li>
									</ul>
								</div>
							</div>
					</>
				)
		}
	}
  return (
            <div className="col-sm-9">
					<div className="blog-post-area">
						<h2 className="title text-center">Latest From our Blog</h2>	 
					</div>
						{Render()}
					<div className="rating-area">
						<ul className="ratings">
							<li className="rate-this">Rate this item:</li>
							<li>
								<i className="fa fa-star color"></i>
								<i className="fa fa-star color"></i>
								<i className="fa fa-star color"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
							</li>
							<li className="color">(6 votes)</li>
						</ul>
						<ul className="tag">
							<li>TAG:</li>
							<li><a className="color" href="">Pink <span>/</span></a></li>
							<li><a className="color" href="">T-Shirt <span>/</span></a></li>
							<li><a className="color" href="">Girls</a></li>
						</ul>
					</div>

					<div className="socials-share">
						<a href=""><img src="image/blog/1574147320.jpg" alt=""></img></a>
					</div>
				<ListComment dt={comment} checkReply={checkReply}/>
				<Comment checkReply={reply} getData={getData}/>
			
				</div>
  );
}
export default Details;
