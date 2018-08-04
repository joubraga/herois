<template>
    <v-container>
        <v-flex xs12 md12 lg12 class="form__div">
            <slot name="form" class="form__slot"></slot>
        </v-flex>
    </v-container>    
</template>

<script>
    export default {
        name: 'CardForm',
    }
</script>

