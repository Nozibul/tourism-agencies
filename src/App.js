import { BrowserRouter ,Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Home from './component/Home/Home';
import Services from './component/Services/Services';
import Header from './pages/Header/Header';
import Login from './pages/Login/Login';
import AuthProvider from './component/context/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Register from './pages/Register/Register';
import ServicesDetails from './component/ServicesDetails/ServicesDetails';
import Footer from './pages/Footer/Footer';
import MyOrder from './component/MyOrders/MyOrder';
import AllOrders from './component/AllOrders/AllOrders';

function App() {
  return (
<div> 
   <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">           
            
             <Home />
             
          </Route>
          <Route exact path="/home">
           
            
             <Home />
            
          </Route>
          <Route exact path="/about">
           
            <About />
           
          </Route>
         
          <Route exact path="/services">
            
            <Services />
           
          </Route>
          <Route exact path="/myOrder">
            <Header />
            <MyOrder />
            <Footer></Footer>
          </Route>
          <Route exact path="/allOrder">
           
             <AllOrders />
           
          </Route>
          <PrivateRoute exact path="/services/:id">
             <Header />
             <ServicesDetails></ServicesDetails>
             <Footer></Footer>
          </PrivateRoute>
          <Route exact path="/contact">
             <Header />
             <Contact />
             <Footer></Footer>
          </Route>
          <Route exact path="/login">
             <Header />
             <Login />
             <Footer></Footer>
          </Route>
          <Route exact path="/register">
             <Header />
             <Register />
             <Footer></Footer>
          </Route>
        </Switch>
          <Route path="*">
             
          </Route>
      </BrowserRouter>
    
   </AuthProvider> 
  </div>  
  );
}

export default App;
