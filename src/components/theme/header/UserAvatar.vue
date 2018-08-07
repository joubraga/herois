<template>
    <div class="avatar">
        <v-avatar v-if="image !== ''" :tile="tile" :size="avatarSize" color="grey lighten-4" >
           <img :src="image" alt="avatar" :width="avatarSize" :height="avatarSize">
        </v-avatar>

         <v-avatar v-else>
            <span class="avatar__span"> Larry</span><v-icon >perm_identity</v-icon>
        </v-avatar>
        
        <v-menu bottom left>
            <v-btn  slot="activator" dark icon >
              <v-icon style="color: #abb3be;">arrow_drop_down</v-icon>
            </v-btn>

            <v-list>
                <v-list-tile class="avatar__list" v-for="(item, i) in items" :key="i" >
                    <v-icon class="avatar__list-icon"> {{ item.icon }} </v-icon> 
                    <v-list-tile-title class="avatar_list-item"> {{ item.title }} </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
    export default {
        name: 'UserAvatar',
        props: {
            avatarSize: {
                type: String,
                default: '48px'
            },
            image: {
                type: String,
                default: ''
            }
        },
        data () {
            return {
                items: [
                    { title: 'Ver perfil', icon: 'account_circle'},
                    { title: 'Sair', icon: 'power_settings_new'}
                ]
            }
        }
    }
</script>

<style lang="css">
    .v-avatar .v-icon, .v-avatar img {
        border: 1px solid #e6e9ed;
    }

    .avatar__list {
        width: 140px;
    }

    .avatar_list-item {
        margin-left: 9%;
    }
</style>

