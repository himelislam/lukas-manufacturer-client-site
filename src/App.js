import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import SignUp from './components/Pages/SignUp/SignUp';
import Navbar from './components/Pages/Shared/Navbar';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import RequireAuth from './components/Pages/Shared/RequireAuth';
import MyProfile from './components/Pages/Dashboard/MyProfile';
import MyOrders from './components/Pages/Dashboard/MyOrders';
import AddReview from './components/Pages/Dashboard/AddReview';
import Footer from './components/Pages/Shared/Footer';
import Purchase from './components/Pages/Purchase/Purchase';
import ManageOrders from './components/Pages/Dashboard/ManageOrders';
import AddProduct from './components/Pages/Dashboard/AddProduct';
import MakeAdmin from './components/Pages/Dashboard/MakeAdmin';
import ManageProducts from './components/Pages/Dashboard/ManageProducts';
import Blogs from './components/Pages/Blogs/Blogs';
import Portfolio from './components/Pages/Portfolio/Portfolio';
import NotFound from './components/Pages/Shared/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Payment from './components/Pages/Payment/Payment';
import RequireAdmin from './components/Pages/Shared/RequireAdmin';
import Tooltip from './components/Pages/Shared/Tooltip';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='manageorders' element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
          <Route path='addproduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='makeadmin' element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
          <Route path='manageproducts' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
        </Route>
        <Route path='purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path='myorders/payment/:id' element={<Payment></Payment>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signUp' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Tooltip></Tooltip>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
