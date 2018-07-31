<template>
    <div class="avatar">
        <v-avatar v-if="image !== ''" :tile="tile" :size="avatarSize" color="grey lighten-4" >
            <img :src="image" alt="avatar" :width="avatarSize" :height="avatarSize">
        </v-avatar>

         <v-avatar v-else>
            <v-icon >perm_identity</v-icon>
        </v-avatar>
        <v-menu bottom left>
            <v-btn
              slot="activator"
              dark
              icon
            >
              <v-icon color="e6e9ed">arrow_drop_down</v-icon>
            </v-btn>

            <v-list>
              <v-list-tile
                v-for="(item, i) in items"
                :key="i"
              >
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
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
                    { title: 'Ver perfil'},
                    { title: 'Sair'}
                ]
            }
        }
    }
</script>

<style lang="css">
    .v-avatar .v-icon, .v-avatar img {
        border: 1px solid #e6e9ed;
    }
</style>

