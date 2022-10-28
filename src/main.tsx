import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
   {
      path: '/',
      element: <App />
   }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<ChakraProvider>
		<React.StrictMode>
         <RouterProvider router={router} />
		</React.StrictMode>
	</ChakraProvider>
)
