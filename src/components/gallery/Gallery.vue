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
                        :options="dropzoneOptions"
                        @vdropzone-sending="sendingImage"
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

    export default {
        name: 'Gallery',
        components: {
            GalleryPhotos,
             vueDropzone: vue2Dropzone
        },
        data () {
            return {
                dropzoneOptions: {
                    url: `${ENDPOINT}photos`,
                    thumbnailWidth: 150,
                    maxFilesize: 0.5
                },
                file: []
            }
        }
    }
</script>
