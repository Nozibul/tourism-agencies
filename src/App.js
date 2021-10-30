import { BrowserRouter ,Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Home from './component/Home/Home';
import Services from './component/Services/Services';
import Header from './pages/Header/Header';
import TopHeader from './pages/TopHeader/TopHeader';
import Login from './pages/Login/Login';
import AuthProvider from './component/context/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Register from './pages/Register/Register';

function App() {
  return (
<div> 
   <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
             <TopHeader />
             <Header />
             <Home />
          </Route>
          <Route exact path="/home">
            <TopHeader />
             <Header />
             <Home />
          </Route>
          <Route exact path="/about">
            <Header />
            <About />
          </Route>
          <Route exact path="/services">
            <Header />
            <Services />
          </Route>
          <PrivateRoute exact path="/contact">
             <Header />
             <Contact />
          </PrivateRoute>
          <Route exact path="/login">
             <Header />
             <Login />
          </Route>
          <Route exact path="/register">
             <Header />
             <Register />
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
