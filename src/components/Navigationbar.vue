<template>
  <v-app-bar color="#E0E0E0" density="compact">
    
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        color="primary"
        @click="sendDrawer"
      ></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title id="apptitle"
      ><span @click="gotoHomePage">
        TW SOCIAL
      </span> 
      </v-app-bar-title
    >
    <template v-slot:append>
      <template v-if="!$store.state.islogin">
        <v-btn @click="goLogin" variant="flat" prepend-icon="mdi-login" color="primary"
          >login</v-btn
        >
        &nbsp;
        <v-btn variant="flat" @click="goRegister" color="green-darken-2">Sign Up</v-btn>
      </template>
      <template v-if="$store.state.islogin">
        <v-btn @click="goNewPost" variant="flat" prepend-icon="mdi-feather" color="primary"
          >Create a post</v-btn
        > &nbsp;
        <v-btn @click="goLogout" variant="flat" append-icon="mdi-logout" color="green-darken-2"
          >logout</v-btn
        >
        &nbsp;
      </template>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navigationbar",
  methods: {
    async sendDrawer() {
      this.leftDrawer = !this.leftDrawer;
      this.$store.dispatch("changeShowDrawer", this.leftDrawer);
    },
    gotoHomePage() {
      this.$router.push({ path: "/" });
    },
    goLogin() {
      this.$router.push({ path: "/login" });
      // this.$store.dispatch("changeLogin", true);
    },
    goLogout() {
      this.$router.push({ path: "/" });
      this.$store.dispatch("changeLogin", false);
      this.$store.dispatch("setToken", '');
    },
    goRegister () {
      this.$router.push({ path: "/register" });
    },
    goNewPost() {
      this.$router.push({ path: "/newpost" });
    }
  },
  data: () => ({
    leftDrawer: false,
  }),
};
</script>

<style>
#apptitle {
  color: #6200ee;
}
</style>
