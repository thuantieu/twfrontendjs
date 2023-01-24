<template>
  <v-container>
    <v-card class="mx-auto" max-width="500">
      <v-img
        height="300"
        class="text-white"
        src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
        cover
      >
        <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark">
          <template v-slot:prepend>
            <v-avatar
              color="primary"
              size="small"
              image="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
              >TH</v-avatar
            >
          </template>
          <template v-slot:append> selection </template>
        </v-toolbar>
      </v-img>

      <v-card-title>Titile</v-card-title>
      <v-card-text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Exercitationem, voluptas!
      </v-card-text>
      <v-card-text>
        <v-divider></v-divider>
        <v-chip-group>
          <v-chip>
            <v-icon size="x-large" icon="mdi-heart" color="pink"></v-icon>
            &ensp;{{ love }}
          </v-chip>

          <v-chip>
            <v-icon
              size="x-large"
              icon="mdi-emoticon-sad"
              color="warning"
            ></v-icon>
            &ensp;{{ love }}
          </v-chip>

          <v-chip>
            <v-icon
              size="x-large"
              icon="mdi-chat-outline"
              color="blue"
            ></v-icon>
            &ensp;{{ love }}
          </v-chip>
        </v-chip-group>
      </v-card-text>

      <!-- <v-card-actions>
      </v-card-actions> -->
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    loading: false,
    selection: 1,
    comment: "",
    love: 1,
  }),

  methods: {
    reserve() {
      console.log(this.comment);
      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style></style>
