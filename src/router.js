import MainPage from './pages/Main'
import { Layout } from './components/Layout'

const routes = [
    {
        path: 'profile',
        name: 'Профиль',
        link: '/profile',
        component: MainPage
    },
    {
        name: 'Домашняя страница',
        link: '/home'
    },
    {
        name: 'Каталог',
        link: '/info'
    },
    {
        name: 'Корзина',
        link: '/cart'
    },
]

export default routes;
