import '../styles/globals.css'

import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { Chakra } from '../Chakra'
import StateManager from '../context/StateManager'
// import { createStandaloneToast } from '@chakra-ui/react'



function MyApp({ Component, pageProps }) {
  // const { ToastContainer } = createStandaloneToast()
  return (

    <StateManager>
    <Chakra cookies={pageProps.cookies} >
       <CSSReset />
     
        <Component {...pageProps} /> 
        {/* <ToastContainer /> */}
        
    </Chakra>
    </StateManager>   
   

  )
  
}


export default MyApp
