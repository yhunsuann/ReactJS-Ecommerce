import { useContext, useState } from "react";
import Err from "../Menber/Err";
import { useParams } from "react-router-dom";
import API from "../API";
import { UserContext } from "../../UserContext";
function Comment(props){
    let getData=props.getData;
    let reply=props.checkReply;
    const value=useContext(UserContext)
    const [input, setinput] = useState("");
    const [err, seterr] = useState({});
    let params = useParams();
    let user=localStorage.getItem('user');
    let accessToken;
    let flag=true;
    let errSubmit={}; 
    let checklogin=localStorage.getItem('data');
    if(user){
        user=JSON.parse(user);
         accessToken=user.token;
    }
    function comment(data){
        if(data==0){
            let config = { 
                headers: { 
                'Authorization': 'Bearer '+ accessToken,
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
                } 
            };	
         const formData=new FormData();
            formData.append('id_blog',params.id)
            formData.append('id_user',user.Auth.id)
            formData.append('id_comment',0);
            formData.append('comment',input);
            formData.append('image_user',user.Auth.avatar);
            formData.append('name_user',user.Auth.name)
            API.post('/blog/comment/'+params.id,formData,config).then((res)=>{  
                getData()
           })
        }else{
                    let config = { 
                    headers: { 
                    'Authorization': 'Bearer '+ accessToken,
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                    } 
                };	
             const formData=new FormData();
                formData.append('id_blog',params.id)
                formData.append('id_user',user.Auth.id)
                formData.append('id_comment',data);
                formData.append('comment',input);
                formData.append('image_user',user.Auth.avatar);
                formData.append('name_user',user.Auth.name)
                API.post('/blog/comment/'+params.id,formData,config).then((res)=>{  
                    getData()
           })
    }
}
    function handelInput(e){
        seterr({});
        setinput(e.target.value);  
    }
    function handelSubmit(e){      
        e.preventDefault();
        if(checklogin==null){
            errSubmit.dangnhap="vui long dang nhap";
            flag=false;
        }else{
            if(input==""){
                errSubmit.password="vui long nhap comment";
                flag=false;
            }
            if(!flag){
                seterr(errSubmit)
            }else{
                comment(reply);
                setinput("");
            } 
        }
        if(!flag){
            seterr(errSubmit);
        }
     }
    
        
    
   
  
    return(
      
        <div className="replay-box">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Leave a replay</h2>
                                <form onSubmit={handelSubmit} >
                                <div className="text-area">
                                    <div className="blank-arrow">
                                        <label>Your Name</label>
                                    </div>
                                    <span>*</span>
                                    <textarea value={input} name="message" rows="11" onChange={handelInput}></textarea>
                                    <button type="Submit" className="btn btn-primary" >post comment</button>
                                    </div>
                                  
                                </form>
                                <Err err={err}/>                   
                        </div>
                    </div>
             </div>
    )
}
export default Comment;