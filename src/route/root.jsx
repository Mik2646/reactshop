import {createBrowserRouter} from 'react-router-dom';
import Enroll from '../pages/Enroll';
import Hero from '../pages/Hero';
import Login from '../pages/Login';
import shopRoute from './shop';


const router = createBrowserRouter([
    {path: "/",
    element: <Hero/>,
    },

    {path: "/Login",
    element: <Login/>
    },

    {path: "/Enroll",
    element: <Enroll/>
    },
    ...shopRoute
    


  
])


export default router;