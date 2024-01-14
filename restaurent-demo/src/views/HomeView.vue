<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheMainTitle from '@/components/TheMainTitle.vue'
import QuoteBox from '@/components/QuoteBox.vue'
import DetailsBox from '@/components/DetailsBox.vue';
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <main>
    <TheHeader />

    <v-main id="main-main">
      <div id="main-container">
        <TheMainTitle main-title="AAA Restaurant" />
        <QuoteBox />
        <DetailsBox header="Hours">
          <div class="d-flex justify-center">
            <ul>
            <li>Monday: 11am - 10pm</li>
            <li>Tuesday: 11am - 10pm</li>
            <li>Wednesday: 11am - 10pm</li>
            <li>Thursday: 11am - 10pm</li>
            <li>Friday: 11am - 10pm</li>
            <li>Saturday: 11am - 10pm</li>
            <li>Sunday: 11am - 10pm</li>
          </ul>
          </div>

        </DetailsBox>
        <DetailsBox header="Location" contents="123 Forest Drive, Forestville, Maine" />
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

li {
    list-style-type: none;
}

#main-main {
  min-height: 100vh;
}
</style>