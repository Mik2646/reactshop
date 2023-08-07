import React, { useEffect, useState } from 'react'
import WithAction from '../../component /Nav'
import { ChakraProvider, Box, Heading, Text, Button, Flex } from '@chakra-ui/react';
import ShopCard from '../../component /ShopCard';
import { Wrap, WrapItem } from '@chakra-ui/react'
import axios from 'axios';



const wrapItem = ()=>{

}

const Home = () => {

  const [shop,setShop] = useState([{}]);
  useEffect(()=>{
    axios.get('http://api_oh.udvc.ac.th/shop').then(response => {
        setShop(response.data.data);
    })
  },[]);
   const wrapItem = shop.map((item)=> 
   <WrapItem key={item.id} padding={7} boxShadow={10}>
    < ShopCard  id={item.id} name={item.name} photo={item.photo}/>
 </WrapItem>
   );

  return (
    <>
    <WithAction/>
     <Wrap align='center' spacing='30px' justify='center' paddingTop={10} >
      {wrapItem}
     </Wrap>
   
    </>
    

    
  )
}

export default Home;