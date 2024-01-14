<script setup>
defineProps({
  subTitle: String
})

</script>

<template>
    <v-sheet :elevation="8" :height="100" :width="300" rounded id="main-title"
        class="d-flex justify-center align-center mt-5">
        <h2>{{ subTitle }}</h2>
    </v-sheet>
</template>