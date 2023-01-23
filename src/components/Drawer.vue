<template>
  <v-navigation-drawer color="#FAFAFA" density temporary :location="location()" v-model="$store.state.leftDrawerState.showDrawer">

  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Drawer",
  data: () => ({
  }),
  methods: {
    location () {
        return this.$store.state.leftDrawerState.location
    },
  },
  mounted () {

  }
};
</script>
