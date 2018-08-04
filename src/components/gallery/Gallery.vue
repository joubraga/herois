<template>
    <v-container class="gallery">
            <v-card flat class="gallery__card">
                <v-flex xs12 md12 lg12 class="gallery__div">
                    
                    <h2 class="gallery__title"> Galeria do personagem </h2>

                    <GalleryPhotos :qtdPhotos="8" />
                    
                    <v-spacer></v-spacer>

                    <vue-dropzone 
                        class="gallery__div-drag" 
                        ref="myVueDropzone" 
                        id="dropzone"
                        :options="options"
                        @vdropzone-files-added="uploaded"
                    />
                </v-flex>
            </v-card>
        </v-container>    
</template>

<script>
    import GalleryPhotos from './GalleryPhotos'
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'
    import { ENDPOINT } from '../../api/config'
    import axios from 'axios'

    export default {
        name: 'Gallery',
        components: {
            GalleryPhotos,
             vueDropzone: vue2Dropzone
        },
        data () {
            return {
                options: {
                    url: `${ENDPOINT}photos`,
                    autoProcessQueue: false,
                    enqueueFile: true,
                    chunking: true,
                    forceChunking: true
                }
            }
        },
        methods: {
            uploaded: (file) => {

                var xhr = new XMLHttpRequest();
                xhr.open("POST", `${ENDPOINT}photos`, true);

                xhr.setRequestHeader("Content-Type", "multipart/form-data")
                xhr.setRequestHeader('Access-Control-Request-Headers', 'authorization,cache-control,x-requested-with')

                // Tem que ver como vai passar o data aqui :S
                xhr.send(); 

                // var formData = new FormData();
                // formData.append('file', file[0], file[0].name)
                // console.log('FD ==> ', formData.get('file'))
                // let teste = formData.get('file')
                // console.log('Teste ==> ', teste )
                // axios({method: 'post', url: `${ENDPOINT}photos`, data: {file: file[0]},
                //     headers: {
                //         'Content-Type': 'multipart/form-data', 
                //         // 'Access-Control-Request-Headers': 'authorization,cache-control,x-requested-with',
                //     }
                // }).then(resp => {
                //     console.log('Agora vai essa bosta', resp)
                // }).catch (error => {
                //     console.log('Claro que nao ne idiota')
                // })
            }
        }
    }
</script>
