<template>
  <v-app>
    <Navigationbar />
    <Drawer />
    <v-main>
      <template v-if="$store.state.dialog.dialog === true">
        <Dialog />
      </template>
      <!-- <template v-if="$store.state.postDialog === true">
        <Post />
      </template> -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navigationbar from "./components/Navigationbar.vue";
import Drawer from "./components/Drawer.vue";
import Dialog from "./components/extras/Dialog.vue";
import Post from "./components/extras/Post.vue";
import { HTTP } from "./plugins/http-common";

export default {
  name: "App",
  components: {
    Navigationbar,
    Drawer,
    Dialog,
    Post
  },

  data: () => ({}),
  mounted() {
  },
  methods: {
  },
};
</script>
