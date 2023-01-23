<template>
  <v-app-bar color="#E0E0E0" density="compact">
  <!-- <v-app-bar color="secondary" density="compact"> -->
    <template v-slot:prepend>
      <v-app-bar-nav-icon color="primary" @click="sendDrawer"></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title @click="gotoHomePage" id="apptitle">TW SOCIAL</v-app-bar-title>
    <template v-slot:append >
      <template v-if="!$store.state.islogin">
        <v-btn variant="flat" prepend-icon="mdi-login" color="primary" >login</v-btn> &nbsp;
        <v-btn variant="flat" color="green-darken-2" >Sign Up</v-btn>
      </template>
      <template v-if="$store.state.islogin">
        <v-btn variant="flat" append-icon="mdi-logout" color="green-darken-2" >logout</v-btn> &nbsp;
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
    gotoHomePage () {
      this.$router.push({path: '/'})
    }
  },
  data: () => ({
    leftDrawer: false,
  }),
};
</script>

<style>
#apptitle {
  color: #6200ee
}
</style>
