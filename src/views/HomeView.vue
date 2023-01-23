<template>
  <Home />
</template>

<script>
import { defineComponent } from "vue";

// Components
import HelloWorld from "../components/HelloWorld.vue";
import Home from "@/components/Home.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    HelloWorld,
    Home,
  },
});
</script>
