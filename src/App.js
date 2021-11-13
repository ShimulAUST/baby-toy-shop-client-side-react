import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Register from './pages/Login/Register/Register';
import ExploreShop from './pages/ExploreShop/ExploreShop';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import AddReviews from './pages/Home/AddReviews/AddReviews';
import Purchase from './pages/Purchase/Purchase';
import MyOrders from './pages/MyOrders/MyOrders';
import Payment from './pages/Payment/Payment';
import AdminRoute from './pages/Login/AdminRoute/AdminRoute';
import MakeAdmin from './pages/MakeAdmin/MakeAdmin';
import ManageOrders from './pages/ManageOrders/ManageOrders';
import AddProduct from './pages/AddProduct/AddProduct';
import ManageProducts from './pages/ManageProducts/ManageProducts';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/exploreShop">
              <ExploreShop></ExploreShop>
            </Route>
            <PrivateRoute exact path="/addReviews">
              <AddReviews></AddReviews>
            </PrivateRoute>
            <PrivateRoute path="/buyNow/:_id">
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/payments">
              <Payment></Payment>
            </PrivateRoute>
            <AdminRoute exact path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute exact path="/addProducts">
              <AddProduct></AddProduct>
            </AdminRoute>
            <AdminRoute exact path="/manageOrders">
              <ManageOrders></ManageOrders>
            </AdminRoute>
            <AdminRoute exact path="/manageProducts">
              <ManageProducts></ManageProducts>
            </AdminRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
