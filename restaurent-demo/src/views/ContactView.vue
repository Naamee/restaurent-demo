<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheMainTitle from '@/components/TheMainTitle.vue'
import ContactBoxVue from '@/components/ContactBox.vue'
import TheFooter from '@/components/TheFooter.vue'

import { useContactStore } from '@/stores/useContactStore'

const contactList = useContactStore().contactList
</script>

<template>
  <main>
    <TheHeader />

    <v-main id="main-main">
      <div id="main-container">
        <TheMainTitle main-title="Contacts" />
        <ContactBoxVue
          v-for="contact in contactList"
          :key="contact.id"
          :name="contact.name"
          :title="contact.title"
          :phone="contact.phone"
          :email="contact.email"
        />
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

#main-main {
  min-height: 100vh;
}
</style>
