<template>
    <v-container class="list">
        <Search @search="startSearch" :routerName="'CriarPersonagens'" v-model="search"/>

        <v-layout>
            <v-flex xs12 md12 lg12>
                <v-data-table 
                    :headers="headers" 
                    :items="items" 
                    class="list__table" 
                    :search="search"
                    rows-per-page-text="Linhas por página">
                    <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
                    <template slot="items" slot-scope="props" style="margin-top: 1%!important; margin-bottom: 1%!important;">
                        <td>  <img :src="props.item.photo" alt=""></td>
                        <td class="text-xs-left list__table-name"> {{ props.item.name }} </td>
                        <td class="text-xs-left"> {{ props.item.class_name }} </td>
                        <td class="text-xs-left"> {{ props.item.specialties }} </td>
                        <td class="text-xs-left"> {{ props.item.health_points }} </td>
                        <td class="text-xs-left"> {{ props.item.defense }} </td>
                        <td class="text-xs-left"> {{ props.item.damage }} </td>
                        <td class="text-xs-left"> {{ props.item.attack_speed }} </td>
                        <td class="text-xs-left"> {{ props.item.movement_speed }} </td>
                        <td> 
                            <v-card-actions class="table__actions">
                                <v-icon class="table__actions-item" @click="exclude(props.item.id, props.item.name)" title="Apagar"> delete </v-icon>
                                <router-link class="table__actions-item" tag="a" :to="({name: 'EditarPersonagem', params: {id: props.item.id}})" title="Editar">
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

    </v-container>
</template>

<script>
    import Search from '../../../components/filter/Search'
    import { ENDPOINT } from '../../../api/config'    

    export default {
        name: 'ListaHerois',
        components: {
            Search,
        },
        data () {
            return {
                search: '',
                items: [],
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
            exclude (id, hero) {
                try {
                    this.$swal({
                        title: `Você realmente deseja excluir o herói ${hero}`,
                        text: "",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#d33',
                        cancelButtonColor: '#3085d6',
                        confirmButtonText: 'Apagar'
                        }).then((result) => {
                            if (result.value) {
                                this.$http.delete(`${ENDPOINT}heroes/${id.toString()}`).then((response) => {
                                    if (response.status === 200) {
                                        this.dialog = false
                                        this.$swal(`Herói ${hero} foi excluido com sucesso`, '', 'success').then(() => {
                                            this.setList()
                                        })
                                    }
                                })
                            }
                        }
                    )
                } catch (error) {
                    console.log(`Erro ao tentar comunicar com a API => ${error}`)
                }
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
