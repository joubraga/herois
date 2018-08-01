<template>
    <v-layout class="search">
        <v-flex xs10 md10 lg10 class="search__div">
            <input type="search" name="search" class="search__input" v-model="filter" @keyup="enviaSearch(filter)" :placeholder="placeholderSearch">
        </v-flex>
        <v-flex xs2 md2 lg2 >
            <router-link :to="{ name: routerName }" class="" tag="button">
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
