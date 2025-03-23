
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './mainLayouts/MainLayout'
import { usepaths } from './store'

function App() {
  const { paths } = usepaths();
  return (
    <div className='App'>
      <Routes>

        {/* Layout App */}
        <Route path='/' element={<MainLayout />} >
          <Route index element={<h2>Welcome to app</h2>} />
          {
            paths.map((el, index) => (
              <Route key={index} path={el.path} element={el.element} />
            ))
          }
        </Route>



        {/* Layout */}
        <Route path='/'>
          <Route path='login' element={<h2>Login Page</h2>} />
          <Route path='register' element={<h2>Register Page</h2>} />
          <Route path='*' element={<h2>404 Page</h2>} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
