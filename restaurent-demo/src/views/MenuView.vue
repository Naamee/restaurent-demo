<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheMainTitle from '@/components/TheMainTitle.vue'
import SubTitle from '@/components/SubTitle.vue'
import MenuItemBox from '@/components/MenuItemBox.vue'
import TheFooter from '@/components/TheFooter.vue'

import { useMenuStore } from '@/stores/useMenuStore';
const menuItems = useMenuStore().menuItems;
</script>

<template>
  <main>
    <TheHeader />

    <v-main id="main-main">
      <div id="main-container">
        <TheMainTitle main-title="Menu" />
        <div v-for="item in menuItems" :key="item.id" id="sub-container" class=" d-content justify-center">
          <SubTitle :sub-title="item.title" />
          <MenuItemBox v-for="item in item.items" :key="item.id" :item-name="item.name" :description="item.description" :price="item.price"/>
        </div>
      </div>
    </v-main>
    <TheFooter />
  </main>
</template>

<style scoped>
#main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#sub-container {
  display: contents;
}

#main-main {
  min-height: 100vh;
}
</style>
