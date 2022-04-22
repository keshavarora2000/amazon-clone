import React, { useEffect, lazy, Suspense } from 'react'

import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
// import Home from './pages/Home/Home';
// import Login from './pages/Login/Login';
// import Register from './pages/Register/Register';
import Loading from './components/Loading/Loading';
import { useDispatch } from 'react-redux';
import { auth } from './utils/firebase'
import { setuser } from './redux/actions';
// import SingleProduct from './pages/SingleProduct/SingleProduct';
// import Checkout from './pages/Checkout/Checkout';
import Payment from './pages/Payment/Payment';
// import Orders from './pages/Orders/Orders';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const Home = lazy(() => import("./pages/Home/Home"))
const Login = lazy(() => import("./pages/Login/Login"))
const Register = lazy(() => import("./pages/Register/Register"))
const Orders = lazy(() => import("./pages/Orders/Orders"))
const Checkout = lazy(() => import("./pages/Checkout/Checkout"))
// const Payment = lazy(() => import("./pages/Payment/Payment"))
const SingleProduct = lazy(() => import("./pages/SingleProduct/SingleProduct"))
 

const promise = loadStripe(
    "pk_test_51Kp487SFteF082WGFnkk6D8WTGBpRgu7Rp3cUfNwOgKFJ8taDv4VbQxtT1UN7CcnvUDqhPffKRrdF9BMTwnuEvsK00CQvUG4oD"
);

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if(authUser) {
                dispatch(setuser(authUser));
            } else {
                dispatch(setuser(null));
            }
        })
    }, [dispatch]);

    return (
            <div className='App'>
                <Suspense fallback={<Loading />}>
                    <Routes>
                            <Route path='/login' element={<Login />}/>
                            <Route path='/register' element={<Register />}/>
                            <Route path='/orders' element={[<Header key="header"/>, <Orders key="orders"/>]} />
                            <Route path='/' element={[<Header key="header"/>, <Home key="home"/>]} />
                            <Route path='/products/:id' element={[<Header key="header"/>, <SingleProduct key="single"/>]} />
                            <Route path='/checkout' element={[<Header key="header"/>, <Checkout key="checkout"/>]}/>
                            <Route path='/payment' element={[<Header key="header"/>, <Elements stripe={promise} key="elements"><Payment key="payment"/></Elements>]}/>
                    </Routes>
                </Suspense>
            </div>    
    )
}

export default App;