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
                                        name="nome" 
                                        solo 
                                        v-model="form.nome" 
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
                                        v-model="form.especialidades"
                                        multiple
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
                                        v-model="form.classe"
                                        max-height="400"
                                        label="Seleciona a classe do personagem"
                                        solo
                                        required
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
                                        name="vida"
                                        solo
                                        v-model="form.vida"
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
                                        name="defesa"
                                        solo
                                        v-model="form.defesa"
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
                                        name="dano"
                                        solo v-model="form.dano"
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
                                        name="vAtaque"
                                        solo
                                        v-model="form.vAtaque"
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
                                        name="vMovimento"
                                        solo
                                        v-model="form.vMovimento"
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
                        this.listaEspecialidades = especialidades.map(espec => espec.name)
                    }
                })
                Request.get(`${ENDPOINT}classes`).then(classes => {
                    if (classes.length > 0) {
                        this.listaClasse = classes.map(classe => classe.name)
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
                    nome: '',
                    especialidades: null,
                    classe: null,
                    vida: 0,
                    defesa: 0,
                    dano: 0,
                    vAtaque: 0,
                    vMovimento: 0
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
                        Request.post(`${ENDPOINT}heroes`, this.form).then(response => {
                            if (response.status === 201) {
                                alert('Personagem cadastrado com sucesso')
                            }
                        })
                    } catch (error) {
                        
                    }
                    
                } else {
                    console.log('chegou aqui essa merda')
                }
            }
            // class_id\": 1,
            // \"name\":
            // \"Herói\",
            // \"health_points\": 100,
            // \"defense\": 100,
            // \"damage\": 100,
            // \"attack_speed\": 1.0,
            // \"movement_speed\": 300,
            // \"specialties\": [1, 2],
        },
        computed: {
            erroEspecialidades: error => this.errorEspecialidades ? '' : 'error-select',
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
    
</style>

