import Home from '../views/Home.vue'
// import LayoutAdmin from './containers/layout/Admin'

export default [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/personagens',
        name: 'personagens',
        component: {
            render (c) { return c('router-view') }
        },
        children: [
            {
                path: '/personagens/lista',
                name: 'ListaPersonagens',
                component: () => import(/* webpackChunkName: "list" */ '../views/admin/herois/list.vue'),
                metas: {
                    name: 'Lista dos Personagens',
                    breadcrumb: ' Personagens / Lista'            
                }
            },
            {
                path: '/personagens/criar',
                name: 'CriarPersonagens',
                component: () => import(/* webpackChunkName: "create" */ '../views/admin/herois/create.vue'),
                metas: {
                    name: 'Criar Personagem',
                    breadcrumb: 'Personagem / Criar'
                }
            },
            {
                path: '/personagens/editar',
                name: 'EditarPersonagem',
                component: () => import(/* webpackChunkName: "editar" */ '../views/admin/herois/create.vue'),
                metas: {
                    name: 'Editar Personagem',
                    breadcrumb: 'Personagem / Editar'
                }
            },
        ]
    }
]