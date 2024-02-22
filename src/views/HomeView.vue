<template>
  <div class="home"></div>
  <div v-if="error" class="error">Could not fetch the data</div>
  <div v-if="documents"></div>
  <div v-for="doc in documents" :key="doc.id">{{ doc.title }}</div>
</template>

<script>
import getCollection from "../composables/getCollection";

export default {
  name: "HomeView",
  setup() {
    const { error, documents } = getCollection("playlists");

    return { error, documents };
  },
};
</script>
