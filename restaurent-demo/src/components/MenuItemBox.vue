<script setup>
defineProps({
  itemName: String,
  description: String,
  price: String
})
</script>

<template>
    <v-sheet :elevation="8" :width="400" rounded id="menu-box" class="mt-5">
        <div id="menu-contents" class="pa-4">
            <h3 class="mb-3">{{ itemName }}</h3>
            <p class="d-flex text-justify mb-3">{{ description }}</p>
            <h5>{{ price }}</h5>
        </div>
    </v-sheet>
</template>

<style scoped>
li {
    list-style-type: none;
}
</style>