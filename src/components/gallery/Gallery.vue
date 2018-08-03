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
                    />
                </v-flex>
            </v-card>
        </v-container>    
</template>

<script>
    import GalleryPhotos from './GalleryPhotos'
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'

    export default {
        name: 'Gallery',
        components: {
            GalleryPhotos,
             vueDropzone: vue2Dropzone
        },
        data () {
            return {
                dropzoneOptions: {
                    url: 'https://httpbin.org/post',
                    thumbnailWidth: 150,
                    maxFilesize: 0.5,
                    headers: { "My-Awesome-Header": "header value" }
                },
                file: []
            }
        },
        methods: {
             init (uploader) {
                // javascript uploader instance
            },
            addedFile (file) {
                this.files.push(file)
            }
        }
    }
</script>
