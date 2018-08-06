<template>
    <header>
        <v-toolbar app flat color="white">
            <div class="toolbar__logo"> {{ image }} </div>
            <v-spacer></v-spacer>
            <UserAvatar class="toolbar__avatar" :avatarSize="'52px'" />
        </v-toolbar>

        <v-spacer></v-spacer>

        <v-toolbar class="toolbar__page" flat style="">
            <v-toolbar-title> a </v-toolbar-title>
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
        created () {
            // this.setRoute(this.$route.matched)
        },
        data () {
            return {
                title: 'Teste',
                image: 'LOGO 200 x 45'
            }
        },
        methods: {
            // setRoute (routes) {
                // console.log('Router Path --> ', this.$route.path)
                // console.log('Router ==> ', routes)
                // return routes.forEach((value) => {
                //     console.log('Value ==> ', value)
                //     if (value.path === this.$route.path) {
                //         return value.name
                //     }
                // })
            // }
        },
        components: {
            UserAvatar
        }
    }
</script>
