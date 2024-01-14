<script setup>
defineProps({
  name: String,
  title: String,
  phone: String,
  email: String,
})
</script>

<template>
    <v-sheet :elevation="8" :width="400" rounded id="details-box" class="mt-5">
        <div id="details-contents" class="pa-4">
            <h3 class="mb-3">{{ name }}</h3>
            <p>{{ title }}</p>
            <p>{{ phone }}</p>
            <p>{{ email }}</p>
        </div>
    </v-sheet>
</template>

<style scoped>
li {
    list-style-type: none;
}
</style>