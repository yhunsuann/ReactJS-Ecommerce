function ListComment(props){
	let dataCmt=props.dt;
	let checkReply= props.checkReply;
	function render(props){
		if(dataCmt.length>0){
			return(dataCmt.map((value,key)=>{	
				if(dataCmt[key]['id_comment']==0){							
						return(
							<>
							<li key={key} className="media">
							<a className="pull-left" href="#">
								<img className="media-object" src={"http://localhost/laravel8/public/upload/user/avatar/"+dataCmt[key]['image_user']} alt=""></img>
							</a>
							<div className="media-body">
								<ul className="sinlge-post-meta">
									<li><i className="fa fa-user"></i>{dataCmt[key]['name_user']}</li>
									<li><i className="fa fa-clock-o"></i>{dataCmt[key]['created_at'].substring(12)}</li>
									<li><i className="fa fa-calendar"></i>{dataCmt[key]['created_at'].substring(0,10)}</li>
								</ul>
								<p>{dataCmt[key]['comment']}</p>
								<a onClick={()=>{checkReply(dataCmt[key]['id'])}} className="btn btn-primary" ><i className="fa fa-reply"></i>Replay</a>
							</div>
						</li>
							{ dataCmt.map((value2,key2)=>{			
									if(dataCmt[key]['id']==dataCmt[key2]['id_comment']){
										return(		
											<li key={key2} className="media second-media">
													<a className="pull-left" href="#">
														<img className="media-object" src={"http://localhost/laravel8/public/upload/user/avatar/"+dataCmt[key2]['image_user']} alt=""></img>
													</a>
													<div className="media-body">
														<ul className="sinlge-post-meta">
															<li><i className="fa fa-user"></i>{dataCmt[key2]['name_user']}</li>
															<li><i className="fa fa-clock-o"></i>{dataCmt[key2]['created_at'].substring(12)}</li>
															<li><i className="fa fa-calendar"></i>{dataCmt[key2]['created_at'].substring(0,10)}</li>
														</ul>
														<p>{dataCmt[key2]['comment']}</p>
														<a onClick={()=>{checkReply(dataCmt[key]['id'])}} className="btn btn-primary" ><i className="fa fa-reply"></i>Replay</a>
													</div>
											</li>
										)
									}
								})
							}
							</>
						)
					}
			
			}))
	}
}
	
    return(
       
            <div className="response-area">
						<h2>{dataCmt.length} RESPONSES</h2>
						<ul className="media-list">
								{render()}
                                    
						</ul>					
			</div>
    )
}
export default ListComment;