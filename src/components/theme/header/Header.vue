<template>
    <header>
        <v-toolbar app flat color="white">
            <div class="toolbar__logo"> {{ image }} </div>
            <v-spacer></v-spacer>
            <UserAvatar class="toolbar__avatar" :avatarSize="'52px'" />
        </v-toolbar>

        <v-spacer></v-spacer>

        <v-layout wrap align-start>
            <v-toolbar class="toolbar__page" flat style="">
                <v-flex xs12 sm5 lg2 d-flex>
                    <v-toolbar-title class="toolbar__route"> {{ nomeRoute }} </v-toolbar-title>
                </v-flex>
                <v-flex xs12 sm7 lg10 d-flex>
                    <v-toolbar-title class="toolbar__menu">
                        <v-layout align-start>
                            <v-flex xs12 sm3 lg2 d-flex>
                                <v-toolbar-title class="toolbar__route"> <router-link :to="{name: 'ListaPersonagens'}" tag="a" class="toolbar__link"> Heróis </router-link> </v-toolbar-title>
                            </v-flex>
                            <v-flex xs12 sm3 lg2 d-flex>
                                <v-toolbar-title class="toolbar__route"> <router-link :to="{name: 'CriarPersonagens'}" tag="a" class="toolbar__link"> Criar </router-link> </v-toolbar-title>
                            </v-flex>
                        </v-layout>
                    </v-toolbar-title>
                </v-flex>
            </v-toolbar>
        </v-layout>
        
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
