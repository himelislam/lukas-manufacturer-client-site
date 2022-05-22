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
        </Route>
        <Route path='purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signUp' element={<SignUp></SignUp>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
