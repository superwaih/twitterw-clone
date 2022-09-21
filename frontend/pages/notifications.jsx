import React from 'react'
import { useColorMode } from '@chakra-ui/react'
import Layout from '../components/Layout'
const notifications = () => {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
      <Layout>
          <div className='text-7xl mt-12'>

              <button onClick={toggleColorMode} >
                  Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
              </button>

              notifications
              </div>
      </Layout>
  )
}

export default notifications