<template>
    <v-container class="list">
        <Search @search="startSearch" :routerName="'CriarPersonagens'"/>

        <v-layout class="list">
            lista dos herois
        </v-layout>

    </v-container>
</template>

<script>
    import Search from '../../../components/filter/Search'
    import axios from 'axios'
    import { ENDPOINT } from '../../../api/config'

    export default {
        name: 'ListaHerois',
        data() {
            return {
                model: '',
                items: [],
                isLoading: ''
            }
        },
        computed: {
            newList: list => this.items = list
        },
        methods: {
            startSearch (filter) {
                try {
                    if (filter.length > 0) {
                        axios.get(`${ENDPOINT}herois`).then((response) => {
                            if (response.status === 200) {
                                this.newList(response.data)
                                console.log('Lista -> ', this.items)
                            }
                        })
                    }
                } catch (error) {
                    console.log(`Erro ao tentar comunicar com a API => ${error}`)
                }
            }
        },
        components: {
            Search
        }
    }
</script>

<style lang="css">
    .filter__btn {
        border: 1px solid red;
        border-radius: 5px;
        width: 100%;
        height: 40px;
        padding: 1%;
    }

    .fitler__new {
        background-color: #4687df;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        color: #ffffff;
        height: 40px;
        width: 40%;
        margin-left: 5%;
    }

    .filter__new-icon {
        margin-right: 3%
    }
</style>
