import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Err(props) {
    let err=props.err;
    function RenderErr(){
        if(Object.keys(err).length>0){
            return Object.keys(err).map((value, key)=>{  
                toast(
                    <> {err[value]}</>
                )
            })
        }

    }

    return (
            <>
            <ToastContainer position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light" />
            {RenderErr()}
            
        </>
    )
}
export default Err;