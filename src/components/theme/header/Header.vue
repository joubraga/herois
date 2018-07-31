<template>
    <v-toolbar app flat color="white">
        <v-toolbar-title v-text="logo"></v-toolbar-title>
        <v-spacer></v-spacer>
        <UserAvatar :avatarSize="'52px'" />
    </v-toolbar>
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
                title: 'Teste'
            }
        },
        components: {
            UserAvatar
        }
    }
</script>