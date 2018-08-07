<template>
    <v-container class="gallery">
            <v-card flat class="gallery__card">
                <v-flex xs12 md12 lg12 class="gallery__div">
                    
                    <h2 class="gallery__title"> Galeria do personagem </h2>

                    <GalleryPhotos :qtdPhotos="qtdPhotos" :photosUrl="photosUrl" />
                    
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
        props: {
            photosUrl: {
                default: []
            }
        },
        components: {
            GalleryPhotos,
             vueDropzone: vue2Dropzone
        },
        data () {
            return {
                qtdPhotos: 8,
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
                const instance = axios.create({
                    baseURL: `${ENDPOINT}`
                })

                axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
                axios.defaults.headers.post['Access-Control-Request-Headers'] = 'authorization,cache-control,x-requested-with'

                const fd = new FormData()
                fd.append('file', file[0], file[0].name)

                instance.post('photos', fd).then(res => {
                    console.log('Sera que foi essa merda => ', res)
                })
            }
        }
    }
</script>
