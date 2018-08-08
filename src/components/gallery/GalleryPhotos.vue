<template>
    <v-layout wrap>

        <v-flex xs12 sm12 d-flex class="gallery__wrap" v-if="photosUrl.length > 0">
            <div class="gallery__preview" v-for="(url, index) in photosUrl" :key="index"> 
                <img :src="url">
            </div>
        </v-flex>

        <v-flex xs12 sm12 d-flex class="gallery__wrap" v-else>
            <div class="gallery__preview" v-for="(url, index) in qtdPhotos" :key="index"> 
            </div>
        </v-flex>
    </v-layout>

</template>

<script>
    export default {
        name: 'GalleryPhotos',
        props: {
            qtdPhotos: {
                type: Number,
                default: 8
            },
            photosUrl: {
                type: Array
            }
        },
        computed: {
            photosList () {
                return ''
            }
        }
    }
</script>
