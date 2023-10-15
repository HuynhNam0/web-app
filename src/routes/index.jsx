import Home from '~/pages/Home';
import Login from '~/pages/LogIn';
import Register from '~/pages/Register';
import Orders from '~/pages/Orders';
import Contact from '~/pages/Contact';
import Cart from '~/pages/Cart';
import Pay from '~/pages/Pay';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/logIn', component: Login },
    { path: '/register', component: Register },
    { path: '/orders', component: Orders },
    { path: '/contact', component: Contact },
    { path: '/cart', component: Cart },
    { path: '/pay', component: Pay },
];

export { publicRoutes };
