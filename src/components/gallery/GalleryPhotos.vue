<template>
    <v-layout>
        <v-flex xs12 sm12 d-flex >
            <div class="gallery__preview"  v-for="(index, value) in qtdPhotos" :key="index"></div>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: 'GalleryPhotos',
        props: {
            qtdPhotos: {
                type: Number,
                required: true
            }
        },
        data () {
            return {

            }
        }
    }
</script>
