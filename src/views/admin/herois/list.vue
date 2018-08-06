<template>
    <v-container class="list">
        <Search @search="startSearch" :routerName="'CriarPersonagens'" v-model="search"/>

        <v-layout>
            <v-flex xs12 md12 lg12>
                <v-data-table :headers="headers" :items="items" :loading="isLoading" class="list__table" :search="search">
                    <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
                    <template slot="items" slot-scope="props">
                        <td>  <img :src="props.item.photo" alt=""></td>
                        <td class="text-xs-left"> {{ props.item.name }} </td>
                        <td class="text-xs-left"> {{ props.item.class_name }} </td>
                        <td class="text-xs-left"> {{ props.item.specialties }} </td>
                        <td class="text-xs-left"> {{ props.item.health_points }} </td>
                        <td class="text-xs-left"> {{ props.item.defense }} </td>
                        <td class="text-xs-left"> {{ props.item.damage }} </td>
                        <td class="text-xs-left"> {{ props.item.attack_speed }} </td>
                        <td class="text-xs-left"> {{ props.item.movement_speed }} </td>
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
        data () {
            return {
                search: '',
                items: [],
                isLoading: false,
                headers: [
                    { sortable: false },
                    { text: 'Nome', value: 'name' },
                    { text: 'Classe', value: 'class_name' },
                    { text: 'Especialidades', value: 'specialties' },
                    { text: 'Vida', value: 'health_points' },
                    { text: 'Defesa', value: 'defense' },
                    { text: 'Dano', value: 'damage' },
                    { text: 'Vel. de Ataque', value: 'attack_speed' },
                    { text: 'Vel.de Movimento', value: 'movement_speed' },
                    { sortable: false}
                ],
            }
        },
        created () {
            this.setList()
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
            },
            setList () {
                axios.get(`${ENDPOINT}heroes`).then(res => {
                    if (res.status === 200) {
                        this.items = res.data.map((hero, index) => {
                            return {
                                id: hero.id,
                                name: hero.name,
                                class_name: hero.class_name,
                                specialties: this.getEspecialities(hero.specialties),
                                health_points: hero.health_points,
                                defense: hero.defense,
                                damage: hero.damage,
                                movement_speed: hero.movement_speed,
                                attack_speed: hero.attack_speed,
                                photo: this.getPhoto(hero.photos, index)
                            }
                        })
                    }
                })
            },
            getEspecialities (especialities) {
                if (especialities.length === 1) {
                    return especialities[0].name
                }
                let specs
                especialities.forEach((value, index) => {
                    if (index === 0) {
                        specs = `${value.name}`
                    } else {
                        specs += `, ${value.name}`
                    }
                })
                return specs
            },
            getPhoto (photo, index) {
                this.$http.get(`${ENDPOINT}photos/${photo[0]}`).then((successCallback) => { 
                    this.items[index].photo = successCallback.url
                })
            }
        }
    }
</script>
