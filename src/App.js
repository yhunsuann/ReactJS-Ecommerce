import Header from './component/Layout/Header';
import Slide from './component/Layout/Slide';
import Footer from './component/Layout/Footer';
import Menuleft from './component/Layout/MenuLeft';
import { useLocation } from 'react-router-dom';
import MenuAcc from './component/Layout/MenuAcc';
import { UserContext } from './UserContext';
import { useEffect, useState } from 'react';
function App(props) {
  let params=useLocation();
  const [number,setnumber]=useState(0);
  let a=0;

  function renderMenu(){
    let menu= <Menuleft/>
    if(params['pathname'].includes('Account')){
      menu=<MenuAcc/>
    }else if(params['pathname'].includes('Cart')){
      menu=""
    }
    return menu;
  }
  useEffect(() => {
    let local=localStorage.getItem('dataproduct');
    let flag=true;
  if(local){
    local=JSON.parse(local)
    flag=false;
  }
  if(flag==false){
    renderNumber(local)
  }else{
    renderNumber({})
  }
   
  }, []);
  function renderNumber(obj){
    let sum=0;
    if(Object.keys(obj).length>0){
    Object.keys(obj).map((key,value)=>{
      sum+=obj[key]['qty']
    })
  }
    setnumber(sum);
  }



  return (
      <UserContext.Provider  value={{number:number,renderNumber:renderNumber}} >
            <Header/>
            <Slide/>
            <section> 
              <div className="container">
                  <div className="row">
                    {renderMenu()}
                    {props.children}
                  </div>
                </div>
              </section>
            <Footer/>
        </UserContext.Provider> 
  );
}
export default App;
