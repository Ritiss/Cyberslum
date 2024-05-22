import { Routes, Route } from 'react-router-dom'
import routes from './router'
import MainPage from './pages/Main'
import { Layout } from './components/Layout'
import HomePage from './pages/Home'
import Profile from './pages/Profile'
import Catalog from './pages/Catalog'
import Cart from './pages/Cart'
import Registration from './pages/Registration'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='/404' element={<NotFoundPage />} />
        <Route path='/' element={<Layout />}>
          <Route path='home' element={<HomePage />} />
          <Route path='registry' element={<Registration />} />
          <Route path='profile' element={<Profile />} />
          <Route path='catalog' element={<Catalog />} />
          <Route path='cart' element={<Cart />} />
        </Route>
      </Routes>
    </>
  )
}
