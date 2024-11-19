import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Content from './component/Product/AllProduct';
import Cart from './component/Cart/Cart';
import IndexBlog from './component/Blog/Index';
import Details from './component/Blog/Details';
import IndexLogin from './component/Menber/Index';
import UpdateUser from './component/Menber/UpdateUser';
import Myproduct from './component/Menber/CreateProduct';
import Addproduct from './component/Menber/Addproduct';
import EditProduct from './component/Menber/EditProduct';
import ProductDetail from './component/Product/ProductDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <Router>
    <App>
     <Routes>
      <Route index path='/' element={<Content/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Blog' element={<IndexBlog/>}/>
      <Route path='/Login' element={<IndexLogin/>}/>
      <Route path={'/blog/detail/:id'} element={<Details/>}/>
      <Route path={'/Account/update'} element={<UpdateUser/>}/>
      <Route path={'/Account/myproduct'} element={<Myproduct/>}/>
      <Route path={'/Account/addproduct'} element={<Addproduct/>}/>
      <Route path={'/product/edit/:id'} element={<EditProduct/>}/>
      <Route path={'/product/detail/:id'} element={<ProductDetail/>}/>
      
     </Routes>
     </App>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
