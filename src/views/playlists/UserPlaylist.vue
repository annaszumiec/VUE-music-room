<template>
  <p>my playlist</p>
</template>

<script>
import getCollection from "@/composables/getCollection";
import getUser from "@/composables/getUser";

export default {
  setup() {
    const { user } = getUser();
    const { documents: playlists } = getCollection("playlist", [
      "userId",
      "==",
      user.value.uid,
    ]);
    console.log(playlists);

    return { playlists };
  },
};
</script>

<style>
</style>