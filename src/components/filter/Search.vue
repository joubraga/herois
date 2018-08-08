<template>
    <v-layout class="search">
        <v-flex xs10 md11 lg11 class="search__div">
            <v-icon class="search__icon">search</v-icon>
            <input type="search" name="search" class="search__input" v-model="filter" @keyup="enviaSearch(filter)" :placeholder="placeholderSearch">
        </v-flex>
        <v-flex xs2 md1 lg1 v-if="newButton">
            <router-link :to="{ name: routerName }" tag="button" class="search__button">
                <span class="search__new"> <v-icon color="white" class="search__new-icon">add_circle</v-icon> Novo </span>
            </router-link>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: 'Search',
        props: {
            routerName: {
                type: String,
                default: ''
            },
            placeholderSearch: {
                type: String,
                default: 'Busca por nome, classe, especialidades, outros ...'
            },
            newButton: {
                type: Boolean,
                default: true
            }
        },
        data () {
            return {
                filter: ''
            }
        },
        methods: {
            enviaSearch (filter) {
                this.$emit('search', filter)
            }
        }
    }
</script>
