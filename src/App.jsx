import './App.css'
import { RouterProvider } from 'react-router-dom';
import router from './Pages/Routes/router';
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
