import {Routes, Route} from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/dashboard'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


const RoutesPages = () =>(
    <>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    <ToastContainer />
    </>
)

export default RoutesPages