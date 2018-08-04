<template>
    <v-card-actions class="table__actions">
        <v-spacer></v-spacer>

        <router-link class="table__actions-item" tag="a" @click="exclude(id)" :to="'#'"> 
            <v-icon> delete </v-icon>
        </router-link>

        <router-link class="table__actions-item" tag="a" :to="({name: routerEdit, params: {id}})">
            <v-icon class="mr-2"> edit </v-icon>
        </router-link>
        
        <slot name="customActions"></slot>
    </v-card-actions>
</template>

<script>
    export default {
        name: 'TableActions',
        props: {
            id: {
                type: Number,
                required: true
            },
            routerEdit: {
                type: String,
                default: ''
            }
        },
        methods: {
            exclude: id => this.$emit('exlude', id)
        }
    }
</script>
