<template>
    <v-dialog v-model="dialog" width="500" >
        <v-card>
            <v-card-title :class="['headline', 'lighten-2', tipo]"  primary-title >
                Privacy Policy
            </v-card-title>

            <v-card-text>
                {{ bodyMessage }} {{ item }}
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
</template>

<script>
    export default {
        name: 'SimpleModal',
        props: {
            dialog: {
                type: Boolean,
                default: false
            },
            tipo: { // Success , Warning, Info
                type: String,
                default: 'error'
            },
            item: {
                type: String,
                default: ''
            },
            bodyMessage: {
                type: String,
                default: `Você realmente deseja excluir ?`
            }
        },
        methods: {
            exclude () {
                this.dialog = false
                this.$emit('excludeConfirm', true)
            },
            closeDialog () {
                this.dialog = false
                this.$emit('closeModal', true)
            }
        }
    }
</script>

