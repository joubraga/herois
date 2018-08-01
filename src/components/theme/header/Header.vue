<template>
    <header>
        <v-toolbar app flat color="white">
            <div class="toolbar__logo"> {{ image }} </div>
            <v-spacer></v-spacer>
            <UserAvatar class="toolbar__avatar" :avatarSize="'52px'" />
        </v-toolbar>

        <v-spacer></v-spacer>

        <v-toolbar class="toolbar__page" flat style="">
            <v-toolbar-title> {{ list }} </v-toolbar-title>
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
            console.log('ROUTER ==> ', this.$router.matched)
        },
        computed: {
            list: x => 'a'
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
