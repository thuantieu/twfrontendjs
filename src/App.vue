<template>
  <v-app>
    <Navigationbar />
    <Drawer />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navigationbar from "./components/Navigationbar.vue";
import Drawer from "./components/Drawer.vue";
export default {
  name: "App",
  components: {
    Navigationbar,
    Drawer
  },

  data: () => ({
    
  }),
  methods: {
    
  },
};
</script>
