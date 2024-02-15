<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="Name" v-model="displayName" />
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <div v-if="error" class="error">{{ error }}</div>
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignup from "@/composables/useSignup";

export default {
  setup() {
    const { error, signup, isPending } = useSignup();

    const email = ref("");
    const password = ref("");
    const displayName = ref("");

    const handleSubmit = async () => {
      const res = await signup(email.value, password.value, displayName.value);
      if (!error.value) {
        console.log("user signed up");
      }
    };

    return { email, password, displayName, handleSubmit, error };
  },
};
</script>

<style>
</style>