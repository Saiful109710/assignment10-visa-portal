import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllVisa from "../pages/AllVisa";
import AddVisa from "../pages/AddVisa";
import VisaDetails from "../pages/VisaDetails";
import MyAddedVisa from "../pages/MyAddedVisa";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import PrivateRoute from "../privateRoute/PrivateRoute";
import MyVisaApplications from "../pages/MyVisaApplications";
import ErrorPage from "../pages/ErrorPage";


  

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/allVisa',
                element:<AllVisa></AllVisa>,
             
            },
            {
                path:'/addVisa',
                element:<PrivateRoute><AddVisa></AddVisa></PrivateRoute>
            },
            {
                path:'/visaDetails/:id',
                element:<PrivateRoute><VisaDetails></VisaDetails></PrivateRoute>,
                loader:({params})=>fetch(`https://visa-navigator-portal-server-chi.vercel.app/allVisa/${params.id}`)
            },
            {
                path:'/myAddedVisa',
                element:<PrivateRoute><MyAddedVisa></MyAddedVisa></PrivateRoute>,
                loader:()=>fetch('https://visa-navigator-portal-server-chi.vercel.app/allVisa')
            },
            {
                path:'/signup',
                element:<Register></Register>
            },
            {
                path:'/signin',
                element:<SignIn></SignIn>
            },
            {
                path:'/myVisaApplication',
                element:<PrivateRoute><MyVisaApplications></MyVisaApplications></PrivateRoute>
            }

        ]
    }
])


export {router}