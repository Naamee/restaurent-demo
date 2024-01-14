<script setup>
defineProps({
  mainTitle: String
})

</script>

<template>
    <v-sheet :elevation="8" :height="100" :width="600" rounded id="main-title"
        class="d-flex justify-center align-center mt-5">
        <h1>{{ mainTitle }}</h1>
    </v-sheet>
</template>