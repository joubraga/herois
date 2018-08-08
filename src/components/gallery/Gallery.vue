<template>
    <v-container class="gallery">
        <v-card flat class="gallery__card">
            <v-flex xs12 md12 lg12 class="gallery__div">
                
                <h2 class="gallery__title"> Galeria do personagem </h2>

                <GalleryPhotos :qtdPhotos="qtdPhotos" :photosUrl="photosUrl" />
                
                <v-spacer></v-spacer>

                <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
                    <div class="gallery__dropbox">
                        <input
                            type="file"
                            multiple
                            :name="uploadFieldName"
                            :disabled="isSaving"
                            @change="filesChange($event.target.name, $event.target.files)
                            fileCount = $event.target.files.length"
                            accept="image/*"
                            class="gallery__dropbox-input-file"
                        >
                            <p class="gallery__dropbox-text" v-if="isInitial"> Drag and drop here </p>
                            <p class="gallery__dropbox-text" v-if="isSaving"> Uploading {{ fileCount }} files... </p>
                    </div>
                </form>
            </v-flex>
        </v-card>
    </v-container>    
</template>

<script>
    import GalleryPhotos from './GalleryPhotos'
    import { ENDPOINT } from '../../api/config'
    const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3

    export default {
        name: 'Gallery',
        props: {
            photosUrl: {
                type: Array
            }
        },
        components: {
            GalleryPhotos,
        },
        mounted () {
            this.reset();
        },
        data () {
            return {
                qtdPhotos: 8,
                uploadedFiles: [],
                uploadError: null,
                currentStatus: null,
                uploadFieldName: 'photos',
            }
        },
        computed: {
            isInitial () {
                return this.currentStatus === STATUS_INITIAL
            },
            isSaving () {
                return this.currentStatus === STATUS_SAVING
            },
            isSuccess () {
                return this.currentStatus === STATUS_SUCCESS
            },
            isFailed () {
                return this.currentStatus === STATUS_FAILED
            }
        },
        methods: {
            reset () {
                this.currentStatus = STATUS_INITIAL
                this.uploadedFiles = []
                this.uploadError = null
            },
            save (formData) {
                this.currentStatus = STATUS_SAVING
                this.upload(formData).then(() => {
                    this.currentStatus = STATUS_INITIAL
                }).catch(err => {
                    this.uploadError = err.response
                    this.currentStatus = STATUS_FAILED
                });
            },
            filesChange (fieldName, fileList) {
                const formData = new FormData()

                if (!fileList.length) return;

                Array.from(Array(fileList.length).keys()).map(x => {
                    formData.append('file', fileList[x], fileList[x].name)
                })
                this.save(formData);
            },
            upload(formData) {
                return this.$http.post(`${ENDPOINT}photos`, formData).then(image => {
                    this.$emit('upload', image.body)
                })
            }
        }
    }
</script>
