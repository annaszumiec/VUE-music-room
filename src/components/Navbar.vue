<template>
  <div class="navbar">
    <nav>
      <img src="" alt="" />
      <h1><router-link :to="{ name: 'home' }"> musicroom </router-link></h1>
      <div class="links">
        <router-link class="btn" :to="{ name: 'signup' }">Sign up </router-link>
        <router-link class="btn" :to="{ name: 'login' }">Log in </router-link>
        <button @click="handleClick">Log out</button>
      </div>
    </nav>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import useLogout from "@/composables/useLogout";
export default {
  setup() {
    const { logout } = useLogout();
    const router = useRouter();

    const handleClick = async () => {
      await logout();
      console.log("user logged out");
      router.push({ name: "login" });
    };
    return { handleClick };
  },
};
</script>


<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  /* background: #415d5f; */
  background: #496061;
}
nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
nav img {
  max-height: 60px;
}
nav h1 {
  margin-left: 20px;
}
nav .links {
  margin-left: auto;
}
nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}
</style>