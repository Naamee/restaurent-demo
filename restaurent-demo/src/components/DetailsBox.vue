<script setup>
defineProps({
  header: String,
  contents: String
})
</script>

<template>
    <v-sheet :elevation="8" :width="400" rounded id="details-box" class="mt-5">
        <div id="details-contents" class="pa-4">
            <h3 class="mb-3">{{ header }}</h3>
            <p class="d-flex justify-center">{{ contents }}</p>
            <slot></slot>
        </div>
    </v-sheet>
</template>

<style scoped>
li {
    list-style-type: none;
}
</style>