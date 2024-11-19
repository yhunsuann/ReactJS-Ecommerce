import { useState } from "react";
import Register from "./Register";
import Login from "./Login";
function Index(){
   return(
    <>
    <Login/>
    <div className="col-sm-1">
					<h2 className="or">OR</h2>
				</div>
    <Register/>            
    </>
   )

}
    
export default Index;