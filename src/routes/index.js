import Loadable from '@loadable/component'

const routes = [
    {
        exact: true,
        path: '/login',
        component: Loadable(() => import('../page/login'))
    },
    {
        exact: true,
        path: '/',
        component: Loadable(() => import('../page/home'))
    },
    {
        path: '/news',
        component: Loadable(() => import('../page/news')),
        // routes: [
        //     {
        //         path: '/news/news1',
        //         component: Loadable(() => import('../page/news1'))
        //     },
        //     {
        //         path: '/news/news2',
        //         component: Loadable(() => import('../page/news2'))
        //     }
        // ]
    },
    {
        requiresAuth: true,
        path: '/about',
        component: Loadable(() => import('../page/about'))
        
    },
    {
        path: '/details',
        component: Loadable(() => import('../page/details'))
        
    },
    {
        path: '/class-demo',
        component: Loadable(() => import('../page/hooks/Classdemo'))
        
    },
    {
        path: '/hooks-demo',
        component: Loadable(() => import('../page/hooks/Hooks'))
        
    },
    {
        path: '/last-demo',
        component: Loadable(() => import('../page/type-link/render-props'))
        
    },
];
export default routes;
