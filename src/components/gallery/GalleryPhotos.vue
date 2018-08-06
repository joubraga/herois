<template>
    <v-layout wrap>
        <v-flex xs12 sm12 d-flex class="gallery__wrap">
            <div class="gallery__preview"  v-for="(index, value) in qtdPhotos" :key="index"> {{ value }} </div>
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
