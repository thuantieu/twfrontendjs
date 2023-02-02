<template>
    <v-dialog
        v-model="$store.state.dialog.dialog"
        activator="parent"
        max-width="600"
      >
        <v-card>
          <v-card-text>
            {{ $store.state.dialog.message }}
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="closeDialog">Close Dialog</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
</template>

<script>
export default {
    name: "dialog",
    methods: {
        closeDialog () {
            this.$store.state.dialog.dialog = false
        }
    }
}
</script>

<style lang="scss" scoped>

</style>