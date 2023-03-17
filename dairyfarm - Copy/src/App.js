import "./App.css";

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./Pages/Home";

import About from "./Pages/About";
import Services from "./Pages/Services";
import Products from "./Pages/Products";
import Gallery from "./Pages/Gallery";
import Features from "./Pages/Features";
import Team from "./Pages/Team";
import Testimonial from "./Pages/Testimonial";
import Notfound from "./Pages/Notfound";
import Contact from "./Pages/Contact";
// import Login from "./Pages/Login";
import Adminlogin from "./Pages/Adminlogin";
import Dashboard from "./Components/Dashboard";
import Available_products from "./Pages/admin/Available_products";
import Available_services from "./Pages/admin/Available_services";

import Team_members from "./Pages/admin/Team_members";
import Addproducts from "./Pages/admin/Addproducts";
import Main from "./Pages/Main";
import Adminmain from "./Pages/admin/Adminmain";
import Addmembers from "./Pages/admin/Addmembers";
import Editproducts from "./Pages/admin/Editproducts";
import AddnewProduct from "./Pages/admin/AddnewProduct";
import Getup from "./Pages/admin/Getup";
import Profileview from "./Pages/admin/Profileview";
import Editmembers from "./Pages/admin/Editmembers";
import Profliemanage from "./Pages/admin/Profliemanage";
import Adprofile from "./Pages/admin/Adprofile";
import Customerreview from "./Pages/admin/Customerreview";
import Addnewservice from "./Pages/admin/Addnewservice";
import Editservices from "./Pages/admin/Editservices";
import Orders from "./Pages/admin/Orders";
import Userlogin from "./Pages/Userlogin";
import Homeviewpro from "./Pages/Homeviewpro";
import Ourteam from "./Components/Ourteam";
// import Orderplace from "./Pages/Orderplace1";
import Orderplace from "./Pages/Orderplace";
import Registration from "./Pages/Registration";
import Placedorder from "./Pages/Placedorder";
import GetOrders from "./Pages/GetOrders";
import Getservices from "./Components/Getservices";
import Getuserlist from "./Pages/admin/Getuserlist";
import Myorders from "./Pages/Myorders";
import Allorders from "./Pages/admin/Allorders";


function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Services />} />
          <Route path="product" element={<Products />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="feature" element={<Features />} />
          <Route path="team" element={<Team />} />
          <Route path="testimonial" element={<Testimonial />} />
          <Route path="notfound" element={<Notfound />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="login" element={<Login />} /> */}
          <Route path="adminlogin" element={<Adminlogin />} />
          <Route path="userlogin" element={<Userlogin />} />
          <Route path="viewpro" element={<Homeviewpro />} />
          <Route path="orderplace" element={<Orderplace />} />
          <Route path="register" element={<Registration />} />
          <Route path="placeorder" element={<Placedorder />} />
          <Route path="myorders" element={<Myorders />} />
          <Route path="product/editorder:id" element={<Orderplace />} />
          <Route path="getorders" element={<GetOrders />} />
          <Route path="getservices" element={<Getservices />} />
        </Route>
        <Route path="admin" element={<Adminmain />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Available_products />} />
          <Route path="services" element={<Available_services />} />
          <Route path="team_mem" element={<Team_members />} />
          <Route path="addproducts" element={<Addproducts />} />
          <Route path="addmem" element={<Addmembers />} />
          <Route path="adpro" element={<AddnewProduct />} />
          <Route path="getup" element={<Getup />} />
          <Route path="promanage" element={<Profliemanage />} />
          <Route path="adprofile" element={<Adprofile />} />
          <Route path="review" element={<Customerreview />} />
          <Route path="adservice" element={<Addnewservice />} />
          <Route path="orders" element={<Orders />} />
          <Route path="ourteam" element={<Ourteam />} />
          <Route path="userlist" element={<Getuserlist />} />
          <Route path="services/editservice:id" element={<Editservices />} />
          <Route path="allorders" element={<Allorders />} />

          <Route path="team_mem/profile:id" element={<Profileview />} />
          <Route path="products/editpro:id" element={<Editproducts />} />
          <Route path="team_mem/editmem:id" element={<Editmembers />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
