<template>
    <header>
        <v-toolbar app flat color="white">
            <!-- <img :src="image" alt="200x45" width="200" height="45" class="toolbar__logo"> -->
            <div class="toolbar__logo"> {{ image }} </div>
            <v-spacer></v-spacer>
            <UserAvatar class="toolbar__avatar" :avatarSize="'52px'" />
        </v-toolbar>
        <v-spacer></v-spacer>
        <v-toolbar class="toolbar__page" flat style="">
            <v-toolbar-title> Nome da Rota </v-toolbar-title>
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

<style lang="css">
    .toolbar__logo {
        width: 200px;
        height: 45px;
        background-color: #f5f7fa;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        color: #abb3be;
    }

    .toolbar__page {
        background-color: #4687df!important; margin-top: 60px!important; color: #ffffff!important;
    }
</style>
