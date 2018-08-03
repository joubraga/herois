<template>
    <v-container class="gallery">
            <v-card flat class="gallery__card">
                <v-flex xs12 md12 lg12 class="gallery__div">
                    <h2 class="gallery__title"> Galaeria dos personagem </h2>
                    <GalleryPhotos :qtdPhotos="8" />
                    <v-spacer></v-spacer>
                    <div class="gallery__div-drag">
                        <h2> Drag and drop here </h2>
                    </div>
                </v-flex>
            </v-card>
        </v-container>    
</template>

<script>
    import GalleryPhotos from './GalleryPhotos'

    export default {
        name: 'Gallery',
        components: {
            GalleryPhotos
        },
        data () {
            return {
            }
        }
    }
</script>

