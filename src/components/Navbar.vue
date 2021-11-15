<template>
  <div class="navbar">
    <nav>
      <h1>
        <router-link :to="{ name: 'Home' }">
          Muso Ninjas
        </router-link>
      </h1>
      <div class="links">
        <div v-if="user">
          <router-link :to="{ name: 'CreatePlaylist' }">Create Playlist</router-link>
          
          <button @click="handleClick">
            Logout
          </button>
        </div>
        <div v-else>
          <router-link class="btn" :to="{ name: 'Signup' }" v-if="!user">
            Sign up
          </router-link>
          <router-link class="btn" :to="{ name: 'Login' }" v-if="!user">
            Log in
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import useLogout from "@/composables/useLogout";
import { useRouter } from "vue-router";
import getUser from "@/composables/getUser";

export default {
  setup() {
    const { logout } = useLogout();
    const router = useRouter();
    const { user } = getUser();

    const handleClick = async () => {
      await logout();
      console.log("user logged out");
      router.push({ name: "Login" });
    };

    return { handleClick, user };
  },
};
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: white;
}

nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
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
