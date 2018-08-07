<template>
    <v-container class="list">
        <Search @search="startSearch" :routerName="'CriarPersonagens'" v-model="search"/>

        <v-layout>
            <v-flex xs12 md12 lg12>
                <v-data-table 
                    :headers="headers" 
                    :items="items" 
                    class="list__table" 
                    :search="search">
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
                        <td> 
                            <v-card-actions class="table__actions">
                                <v-icon class="table__actions-item" @click="setexcludeId(props.item.id)"> delete </v-icon>
                                <router-link class="table__actions-item" tag="a" :to="({name: 'EditarPersonagem', params: {id: props.item.id}})">
                                    <v-icon class="mr-2"> edit </v-icon>
                                </router-link>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </td>
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

        <v-dialog v-model="dialog" width="500" >
            <v-card>
                <v-card-title class="headline lighten-2 error"  primary-title >
                    Excluir
                </v-card-title>

                <v-card-text>
                    Você realmente deseja excluir este herói?
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" flat @click="closeDialog" >
                        Cancelar
                    </v-btn>

                    <v-btn color="primary" flat @click="exclude" >
                        Excluir
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </v-container>
</template>

<script>
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
                dialog: false,
                items: [],
                idItemExclude: '',
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
                ]
            }
        },
        created () {
            this.setList()
        },
        methods: {
            startSearch (filter) {
                try {
                    if (filter.length > 0) {
                        this.search = filter                 
                    } else {
                        this.search = ''
                    }
                } catch (error) {
                    console.log(`Erro ao tentar comunicar com a API => ${error}`)
                }
            },
            deleteItem (item) {
                const index = this.desserts.indexOf(item)
                confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
            },
            setexcludeId (id) {
                this.idItemExclude = id
                this.dialog = true
            },
            exclude () {
                try {
                    if (this.idItemExclude > 0) {
                        this.$http.delete(`${ENDPOINT}heroes/${this.idItemExclude}`).then((response) => {
                            if (response.status === 200) {
                                this.dialog = false
                                this.$swal('Herói excluído com sucesso', '', 'success').then(() => {
                                    this.idItemExclude = ''
                                    this.setList()
                                })
                            }
                        })
                    }
                } catch (error) {
                    console.log(`Erro ao tentar comunicar com a API => ${error}`)
                    this.idItemExclude = ''
                }
            },
            closeDialog () {
                this.dialog = false
                this.idItemExclude = false
            },
            setList () {
                this.$http.get(`${ENDPOINT}heroes`).then(res => {
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
