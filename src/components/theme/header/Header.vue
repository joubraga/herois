<template>
    <header>
        <v-toolbar app flat color="white">
            <div class="toolbar__logo"> {{ image }} </div>
            <v-spacer></v-spacer>
            <UserAvatar class="toolbar__avatar" :avatarSize="'52px'" />
        </v-toolbar>

        <v-spacer></v-spacer>

        <v-toolbar class="toolbar__page" flat style="">
            <v-toolbar-title class="toolbar__route"> {{ nomeRoute }} </v-toolbar-title>
            <v-toolbar-title class="toolbar__menu">
                <ul class="toolbar__menu">
                    <li class="toolbar__li"> <router-link :to="{name: 'ListaPersonagens'}" tag="a" class="toolbar__link"> Heróis </router-link> </li>
                    <li class="toolbar__li"> <router-link :to="{name: 'CriarPersonagens'}" tag="a" class="toolbar__link"> Criar </router-link> </li>
                </ul>
            </v-toolbar-title>
        </v-toolbar>
        
    </header>
</template>

<script>
    import UserAvatar from './UserAvatar'

    export default {
        name: 'Header',
        props: {
            logo: {
                type: String,
                default: ''
            }
        },
        computed: {
            nomeRoute () {
                return this.$store.modules.routeStore.state.name
            },
            breadcrumb () {
                return this.$store.modules.routeStore.state.breadcrumb
            }
        },
        data () {
            return {
                title: 'Teste',
                image: 'LOGO 200 x 45'
            }
        },
        components: {
            UserAvatar
        }
    }
</script>
