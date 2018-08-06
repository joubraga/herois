<template>
    <v-container class="list">
        <Search @search="startSearch" :routerName="'CriarPersonagens'" v-model="search"/>

        <v-layout>
            <v-flex xs12 md12 lg12>
                <v-data-table :headers="headers" :items="items" :loading="isLoading" class="list__table" :search="search">
                    <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
                    <template slot="items" slot-scope="props">
                        <td>imagem</td>
                        <td class="text-xs-left"> {{ props.item.nome }} </td>
                        <td class="text-xs-left"> {{ props.item.classe }} </td>
                        <td class="text-xs-left"> {{ props.item.especialidades }} </td>
                        <td class="text-xs-left"> {{ props.item.vida }} </td>
                        <td class="text-xs-left"> {{ props.item.defesa }} </td>
                        <td class="text-xs-left"> {{ props.item.dano }} </td>
                        <td class="text-xs-left"> {{ props.item.vAtaque }} </td>
                        <td class="text-xs-left"> {{ props.item.vMovimento }} </td>
                        <td> <ActionList @delete="exclude" :routerEdit="'EditarPersonagem'" :id="props.item.id"/> </td>
                    </template>
                    <template slot="no-data">
                        <v-alert :value="true" color="error" icon="warning">
                            Não há resultado com o valor {{ search }}
                        </v-alert>
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
                search: '',
                items: [
                    {id: 1, nome: 'Jou', classe: 'Lutador', especialidades: 'anti-tanque', vida: 2500, defesa: 250, dano: 600, vAtaque: 2.5, vMovimento: 5},
                    {id: 2, nome: 'Jou 2', classe: 'Arqueiro', especialidades: 'Ataque a Distancia', vida: 2500, defesa: 250, dano: 600, vAtaque: 2.8, vMovimento: 10}
                ],
                isLoading: false,
                headers: [
                    { sortable: false },
                    { text: 'Nome', value: 'nome' },
                    { text: 'Classe', value: 'classe' },
                    { text: 'Especialidades', value: 'especialidades' },
                    { text: 'Vida', value: 'vida' },
                    { text: 'Defesa', value: 'defesa' },
                    { text: 'Dano', value: 'dano' },
                    { text: 'Vel. de Ataque', value: 'vAtaque' },
                    { text: 'Vel.de Movimento', value: 'vMovimento' },
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
                        this.search = filter                 
                    } else {
                        this.search = ''
                        this.isLoading = !this.isLoading
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
