<template>
    <div class="personagem">
        <CardForm>
            <v-card flat slot="form">
                <v-container fluid grid-list-xl>
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-layout wrap align-center>
                            <v-flex xs12 sm4 d-flex>
                                <div class="form__input-div-custom">
                                    <label class="form__input-label">Nome</label>
                                    <v-text-field 
                                        name="name" 
                                        solo 
                                        v-model="form.name" 
                                        :rules="[v => !!v || 'Campo Obrigatório']"  
                                        required
                                        >
                                    </v-text-field>
                                </div>
                            </v-flex>

                            <v-flex xs12 sm4 d-flex>
                                <div class="form__input-div-custom">
                                    <label class="form__input-label">Especialidades</label>
                                    <v-select
                                        :items="listaEspecialidades"
                                        v-model="form.specialties"
                                        multiple
                                        item-value="id"
                                        item-text="name"
                                        return-object
                                        max-height="400"
                                        label="Selecione as especialidades do personagem"
                                        solo
                                        required
                                        :rules="[v => !!v || 'Campo Obrigatório']"
                                    ></v-select>
                                </div>
                            </v-flex>

                            <v-flex xs12 sm4 d-flex>
                                <div class="form__input-div-custom">
                                    <label class="form__input-label">Classe</label>
                                    <v-select
                                        :items="listaClasse"
                                        v-model="form.class_id"
                                        max-height="400"
                                        label="Seleciona a classe do personagem"
                                        solo
                                        required
                                        item-value="id"
                                        item-text="name"
                                        return-object
                                        :rules="[v => !!v || 'Campo Obrigatório']"             
                                    ></v-select>
                                </div>
                            </v-flex>

                            <v-flex xs12 sm2 d-flex>
                                <div class="form__input-div-custom">
                                    <label class="form__input-label">Vida</label>
                                    <v-text-field 
                                        type="number" 
                                        min="0"
                                        name="health_points"
                                        solo
                                        v-model="form.health_points"
                                        :rules="[v => !!v || 'Campo Obrigatório']"
                                        required
                                        >
                                    </v-text-field>
                                </div>
                            </v-flex>
                            
                            <v-flex xs12 sm2 d-flex>
                                <div class="form__input-div-custom">
                                    <label class="form__input-label">Defesa</label>
                                    <v-text-field 
                                        type="number"
                                        min="0"
                                        name="defense"
                                        solo
                                        v-model="form.defense"
                                        :rules="[v => !!v || 'Campo Obrigatório']"
                                        required
                                        >
                                    </v-text-field>
                                </div>
                            </v-flex>

                            <v-flex xs12 sm2 d-flex>
                                <div class="form__input-div-custom">
                                    <label class="form__input-label">Dano</label>
                                    <v-text-field
                                        type="number"
                                        min="0"
                                        name="damage"
                                        solo v-model="form.damage"
                                        :rules="[v => !!v || 'Campo Obrigatório']"
                                        required
                                        >
                                    </v-text-field>
                                </div>
                            </v-flex>

                            <v-flex xs12 sm2 d-flex>
                                <div class="form__input-div-custom">
                                    <label class="form__input-label">Velocidade Ataque</label>
                                    <v-text-field
                                        type="number"
                                        min="0"
                                        name="attack_speed"
                                        solo
                                        v-model="form.attack_speed"
                                        :rules="[v => !!v || 'Campo Obrigatório']"
                                        required
                                        >
                                    </v-text-field>
                                </div>
                            </v-flex>

                            <v-flex xs12 sm2 d-flex>
                                <div class="form__input-div-custom">
                                    <label class="form__input-label">Velocidade Movimento</label>
                                    <v-text-field
                                        type="number"
                                        min="0"
                                        name="movement_speed"
                                        solo
                                        v-model="form.movement_speed"
                                        :rules="[v => !!v || 'Campo Obrigatório']"
                                        required
                                        >
                                    </v-text-field>
                                </div>
                            </v-flex>
                        </v-layout>
                    </v-form>
                </v-container>
            </v-card>
        </CardForm>

        <Gallery />

        <v-container>
            <v-flex right>
                <v-btn dark large class="action__button-save" @click="saveHero"> 
                    <v-icon class="action__buton-icon">check</v-icon> Salvar</v-btn>
            </v-flex>
        </v-container>
    </div>
</template>

<script>
    import { ENDPOINT } from '../../../api/config'
    import CardForm from '../../../components/cards/CardForm'
    import Gallery from '../../../components/gallery/Gallery'
    import Request from '../../../request'
    import GalleryPhotosVue from '../../../components/gallery/GalleryPhotos.vue';

    export default {
        name: 'CadastroPersonagem',
        components: {
            CardForm,
            Gallery
        },
        mounted () {
            try {
                Request.get(`${ENDPOINT}specialties`).then(especialidades => {
                    if (especialidades.length > 0) {
                        this.listaEspecialidades = especialidades.map(espec => espec)
                    }
                })
                Request.get(`${ENDPOINT}classes`).then(classes => {
                    if (classes.length > 0) {
                        this.listaClasse = classes.map(classe => classe)
                    }
                })
            } catch (error) {
                console.log('Erro ao carregar especialidades / classes ', error)
            }
        },
        data () {
            return {
                valid: true,
                items: [],
                form: {
                    name: '',
                    specialties: null,
                    class_id: null,
                    health_points: 0,
                    defense: 0,
                    damage: 0,
                    attack_speed: 0,
                    movement_speed: 0,
                    photos: null
                },
                listaEspecialidades: [],
                errorEspecialidades: false,
                errorClasse: false,
                listaClasse: [],
                nameRules: [
                    v => !!v || 'Campo obrigatório'
                ],
            }
        },
        methods: {
            async saveHero () {
                if (this.$refs.form.validate()) {
                    try {
                        this.setEspecelidades()
                        this.setClasses()      
                        Request.post(`${ENDPOINT}heroes`, this.form).then(response => {
                            if (response.status === 201) {
                                alert('Personagem cadastrado com sucesso')
                            }
                        })
                    } catch (error) {
                        console.log('Erro Post Herois -> ', error)
                    }
                } else {
                    console.log('Erro ao salvar o Herói')
                }
            },
            setEspecelidades () {
                this.form.specialties = this.form.specialties.map(spec => spec.id)
            },
            setClasses () {
                this.form.class_id = this.form.class_id.map(classe => classe.id)
            }
        }
    }
</script>

<style lang="css">
    .v-input__slot {
        box-shadow: none!important;
        border: 1px solid #e6e9ed!important;
        width: auto;
        padding: 2.5%;
        border-radius: 5px;
        color: #656d78;
        width: 100%;
    }

    .v-input--checkbox .v-input__slot {
        border: none!important;
    }

    .form__input-div-custom .v-select, .form__input-div-custom .v-text-field {
        width: 100%;
    }

    .error--text .v-input__slot, .error-select {
        border: 1px solid #ff5252!important;
    }

    .v-messages__message {
        font-weight: 600;
        font-size: 14px;
    }
    
</style>
