<template>
    <div class="personagem">
        <CardForm>
            <v-card flat slot="form">
                <v-container fluid grid-list-xl>
                    <v-layout wrap align-center>

                        <v-flex xs12 sm4 d-flex>
                            <div class="form__input-div-custom">
                                <label class="form__input-label">Nome</label>
                                <input type="text" name="nome" v-model="form.nome" class="form__input" />
                            </div>
                        </v-flex>

                        <v-flex xs12 sm4 d-flex>
                            <div class="form__input-div-custom">
                                <label class="form__input-label">Especialidades</label>
                                <input type="text" name="especialidades" v-model="form.especialidades" class="form__input" />
                            </div>
                        </v-flex>

                        <v-flex xs12 sm4 d-flex>
                            <div class="form__input-div-custom">
                                <label class="form__input-label">Classe</label>
                                <input type="text" name="classe" v-model="form.classe" class="form__input" />
                            </div>
                        </v-flex>

                        <v-flex xs12 sm2 d-flex>
                            <div class="form__input-div-custom">
                                <label class="form__input-label">Vida</label>
                                <input type="number" name="vida" v-model="form.vida" class="form__input" />
                            </div>
                        </v-flex>
                        
                        <v-flex xs12 sm2 d-flex>
                            <div class="form__input-div-custom">
                                <label class="form__input-label">Defesa</label>
                            <input type="number" name="defesa" v-model="form.defesa" class="form__input" />
                        </div>
                        </v-flex>

                        <v-flex xs12 sm2 d-flex>
                            <div class="form__input-div-custom">
                                <label class="form__input-label">Dano</label>
                                <input type="number" name="dano" v-model="form.dano" class="form__input" />
                            </div>
                        </v-flex>

                        <v-flex xs12 sm2 d-flex>
                            <div class="form__input-div-custom">
                                <label class="form__input-label">Velocidade Ataque</label>
                                <input type="number" name="vAtaque" v-model="form.vAtaque" class="form__input" />
                            </div>
                        </v-flex>

                        <v-flex xs12 sm2 d-flex>
                            <div class="form__input-div-custom">
                                <label class="form__input-label">Velocidade Movimento</label>
                                <input type="number" name="vMovimento" v-model="form.vMovimento" class="form__input" />
                            </div>
                        </v-flex>

                    </v-layout>
                </v-container>
            </v-card>
        </CardForm>

        <Gallery />

        <v-container>
            <v-flex>
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
