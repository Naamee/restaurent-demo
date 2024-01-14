<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <v-app-bar id="main-header">
        <v-toolbar-title>Restaurant</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text><router-link to="/">Home</router-link></v-btn>
        <v-btn text><router-link to="/menu">Menu</router-link></v-btn>
        <v-btn text><router-link to="/contact">Contact</router-link></v-btn>
    </v-app-bar>
</template>

<style scoped>
a {
    text-decoration: none;
}
</style>