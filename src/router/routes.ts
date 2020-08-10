import HomeView from "../views/home";
import AboutView from "../views/about";

export default [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView
    }
]