import { redirect } from 'react-router-dom';
import Home from '../pages/Home/Home'
import Shop from '../pages/Home/Shop'
import { getProfileFX } from '../services/AuthenService';
const shopRoute = [
  {
    path:"home",
    loader:async()=>{
      const res = await getProfileFX();
      if(!res){
       throw redirect('/Login');
      }
      localStorage.setItem('userdata', JSON.stringify(res.data.user));
      return res.data.user
    },

    children:[
       {
        path:"",
        element:<Home/> 
       },

       {
        path:"shop",
        element:<Shop/>
       }
    ]
  }



]

export default shopRoute;