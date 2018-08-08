export default [
    {
        path: '*',
        redirect: '/personagens/lista'
    },
    {
        path: '/personagens',
        redirect: '/personagens/lista',
        name: 'personagens',
        component: {
            render (c) { return c('router-view') }
        },
        children: [
            {
                path: '/personagens/lista',
                name: 'ListaPersonagens',
                component: () => import(/* webpackChunkName: "list" */ '../views/admin/herois/list.vue'),
                meta: {
                    name: 'Lista dos Personagens',
                    breadcrumb: ' Personagens / Lista'            
                }
            },
            {
                path: '/personagens/criar',
                name: 'CriarPersonagens',
                component: () => import(/* webpackChunkName: "create" */ '../views/admin/herois/create.vue'),
                meta: {
                    name: 'Criar Personagem',
                    breadcrumb: 'Personagem / Criar'
                }
            },
            {
                path: '/personagens/editar/:id',
                name: 'EditarPersonagem',
                component: () => import(/* webpackChunkName: "editar" */ '../views/admin/herois/create.vue'),
                meta: {
                    name: 'Editar Personagem',
                    breadcrumb: 'Personagem / Editar'
                }
            },
        ]
    }
]