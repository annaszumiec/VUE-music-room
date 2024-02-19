<template>
  <form @submit.prevent="handleSubmit">
    <h4>Create New Playlist</h4>
    <input type="text" required paceholder=" Playlist title " v-model="title" />
    <textarea
      required
      paceholder=" Playlist description... "
      v-model="description"
    ></textarea>
    <!-- upload playlist image -->
    <label> Upload image</label>
    <input type="file" />
    <div class="error"></div>
    <button>Create</button>
  </form>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const title = ref("");
    const description = ref("");

    const handleSubmit = () => {
      console.log(title.value, description.value);
    };

    return { title, description, handleSubmit };
  },
};
</script>

<style>
input::file-selector-button {
  font-weight: bold;
  background: #bae732d5;
  color: #35313d;
  padding: 0.5em;
  border: thin solid var(--primary);
  border-radius: 3px;
}

input[type="file"] {
  border: 0;
  padding: 0;
}
label {
  font-size: 12px;
  display: block;
  margin-top: 30px;
  color: #efffbe;
}
button {
  margin-top: 20px;
}
h4 {
  color: #efffbe;
}
</style>