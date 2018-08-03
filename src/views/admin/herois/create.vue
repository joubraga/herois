<template>
    <div class="personagem">
        <CardForm>
            <v-card flat slot="form">
                <v-container fluid grid-list-xl>
                    <v-layout wrap align-center>

                        <v-flex xs12 sm4 d-flex>
                            <div class="form__input-div-custom">
                                <label class="form__input-label">Nome</label>
                                <v-text-field name="nome" solo v-model="form.nome" ></v-text-field>
                            </div>
                        </v-flex>

                        <v-flex xs12 sm4 d-flex>
                            <div class="form__input-div-custom">
                                <label class="form__input-label">Especialidades</label>
                                <v-select
                                    :items="states"
                                    v-model="form.especialidades"
                                    multiple
                                    max-height="400"
                                    solo                                    
                                ></v-select>
                            </div>
                        </v-flex>

                        <v-flex xs12 sm4 d-flex>
                            <div class="form__input-div-custom">
                                <label class="form__input-label">Classe</label>
                                <v-select
                                    :items="states"
                                    v-model="form.classe"
                                    max-height="400"
                                    solo                                    
                                ></v-select>
                            </div>
                        </v-flex>

                        <v-flex xs12 sm2 d-flex>
                            <div class="form__input-div-custom">
                                <label class="form__input-label">Vida</label>
                                <v-text-field type="number" name="vida" solo v-model="form.vida" ></v-text-field>
                            </div>
                        </v-flex>
                        
                        <v-flex xs12 sm2 d-flex>
                            <div class="form__input-div-custom">
                                <label class="form__input-label">Defesa</label>
                                <v-text-field type="number" name="defesa" solo v-model="form.defesa" ></v-text-field>
                        </div>
                        </v-flex>

                        <v-flex xs12 sm2 d-flex>
                            <div class="form__input-div-custom">
                                <label class="form__input-label">Dano</label>
                                <v-text-field type="number" name="dano" solo v-model="form.dano" ></v-text-field>
                            </div>
                        </v-flex>

                        <v-flex xs12 sm2 d-flex>
                            <div class="form__input-div-custom">
                                <label class="form__input-label">Velocidade Ataque</label>
                                <v-text-field type="number" name="vAtaque" solo v-model="form.vAtaque" ></v-text-field>
                            </div>
                        </v-flex>

                        <v-flex xs12 sm2 d-flex>
                            <div class="form__input-div-custom">
                                <label class="form__input-label">Velocidade Movimento</label>
                                <v-text-field type="number" name="vMovimento" solo v-model="form.vMovimento" ></v-text-field>
                            </div>
                        </v-flex>

                    </v-layout>
                </v-container>
            </v-card>
        </CardForm>

        <Gallery />

        <v-container>
            <v-flex right>
                 <v-btn dark large class="action__button-save"> <v-icon>check</v-icon> Salvar</v-btn>
            </v-flex>
        </v-container>
    </div>
</template>

<script>
    import CardForm from '../../../components/cards/CardForm'
    import Gallery from '../../../components/gallery/Gallery'

    export default {
        name: 'CadastroPersonagem',
        components: {
            CardForm,
            Gallery
        },
        data () {
            return {
                items: [],
                form: {
                    nome: '',
                    especialidades: [],
                    classe: [],
                    vida: '',
                    defesa: '',
                    dano: '',
                    vAtaque: '',
                    vMovimento: ''
                }
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

    .form__input-div-custom .v-select, .form__input-div-custom .v-text-field {
        width: 100%;
    }
</style>

