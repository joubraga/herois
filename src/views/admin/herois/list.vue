<template>
    <v-container class="list">
        <Search @search="startSearch" :routerName="'CriarPersonagens'"/>

        <v-layout>
            <v-flex xs12 md12 lg12>
                <v-data-table :headers="headers" :items="items" :loading="isLoading" class="list__table">
                    <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
                    <template slot="items" slot-scope="props">
                        <td>imagem</td>
                        <td class="text-xs-center"> {{ props.item.nome }} </td>
                        <td class="text-xs-center"> {{ props.item.classe }} </td>
                        <td class="text-xs-center"> {{ props.item.especialidades }} </td>
                        <td class="text-xs-center"> {{ props.item.vida }} </td>
                        <td class="text-xs-center"> {{ props.item.defesa }} </td>
                        <td class="text-xs-center"> {{ props.item.dano }} </td>
                        <td class="text-xs-center"> {{ props.item.vAtaque }} </td>
                        <td class="text-xs-center"> {{ props.item.vMovimento }} </td>
                        <td> <ActionList @delete="exclude" :routerEdit="'EditarPersonagem'" :id="props.item.id"/> </td>
                    </template>
                    <div class="spacer"></div>
                </v-data-table>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
    import axios from 'axios'
    import ActionList from '../../../components/actions/TableActions'
    import Search from '../../../components/filter/Search'
    import { ENDPOINT } from '../../../api/config'

    export default {
        name: 'ListaHerois',
        components: {
            Search,
            ActionList
        },
        data() {
            return {
                model: '',
                items: [
                    {id: 1, nome: 'Jou', classe: 'Lutador', especialidades: 'anti-tanque', vida: 2500, defesa: 250, dano: 600, vAtaque: 2.5, vMovimento: 5},
                    {id: 2, nome: 'Jou 2', classe: 'Arqueiro', especialidades: 'Ataque a Distancia', vida: 2500, defesa: 250, dano: 600, vAtaque: 2.5, vMovimento: 5}
                ],
                isLoading: false,
                headers: [
                    { sortable: false },
                    { text: 'Nome', value: '' },
                    { text: 'Classe', value: '' },
                    { text: 'Especialidades', value: '' },
                    { text: 'Vida', value: '' },
                    { text: 'Defesa', value: '' },
                    { text: 'Dano', value: '' },
                    { text: 'Vel. de Ataque', value: '' },
                    { text: 'Vel.de Movimento', value: '' },
                    { sortable: false}
                ],
            }
        },
        computed: {
            newList: list => list.length > 0 ? this.items = list : []
        },
        methods: {
            startSearch (filter) {
                try {
                    if (filter.length > 0) {
                        this.isLoading = !this.isLoading
                        axios.get(`${ENDPOINT}herois`).then((response) => {
                            if (response.status === 200) {
                                this.isLoading = false
                            }
                        })
                    }
                } catch (error) {
                    this.isLoading = false
                    console.log(`Erro ao tentar comunicar com a API => ${error}`)
                }
            },
            exclude (id) {
                try {
                    axios.delete(`${ENDPOINT}herois`, id).then((response) => {
                        if (response.status === 200) {
                            console.log('Excluido com sucesso')
                        }
                    })
                } catch (error) {
                    console.log(`Erro ao tentar comunicar com a API => ${error}`)
                }
            }
        }
    }
</script>
