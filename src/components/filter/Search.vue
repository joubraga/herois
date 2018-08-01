<template>
    <v-layout class="search">
        <v-flex xs10 md10 lg10>
            <input type="search" name="search" class="filter__btn" v-model="filter" @keyup="enviaSearch(filter)" :placeholder="placeholderSearch">
        </v-flex>
        <v-flex xs2 md2 lg2 >
            <router-link :to="{ name: routerName }" class="">
                <a class="fitler__new"> <v-icon color="white" class="filter__new-icon">add_circle</v-icon> Novo </a>
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
