<template>
  <div class="navbar">
    <nav>
      <img src="" alt="" />
      <h1><router-link :to="{ name: 'home' }"> musicroom </router-link></h1>
      <div class="links">
        <div v-if="user">
          <router-link :to="{ name: 'createPlaylist' }"
            >Create Playlist</router-link
          >
          <router-link :to="{ name: 'userPlaylist' }">My Playlist</router-link>
          <span>Hi, {{ user.displayName }}</span>
          <button @click="handleClick" class="logout">Logout</button>
        </div>
        <div v-else>
          <router-link class="btn" :to="{ name: 'signup' }"
            >Sign up
          </router-link>
          <router-link class="btn" :to="{ name: 'login' }">Log in </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import useLogout from "@/composables/useLogout";
import getUser from "@/composables/getUser";

export default {
  setup() {
    const { user } = getUser();
    const { logout } = useLogout();
    const router = useRouter();

    const handleClick = async () => {
      await logout();
      console.log("user logged out");
      router.push({ name: "login" });
    };

    return { handleClick, user };
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
nav h1 :hover {
  color: #3dfeee;
  font-size: 28px;
}
nav .links {
  margin-left: auto;
}
nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}
button:hover {
  background-color: #f13d3d;
  color: whitesmoke;
}
a:hover {
  color: #3dfeee;
}
span {
  font-size: 14px;
  display: inline-block;
  margin-left: 16px;
  padding-left: 16px;
  border-left: 1px solid #eee;
  font-weight: 600;
  color: #76fc32;
}
</style>