<template>
  <v-container>
    <h1>Home Page</h1>
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
        </v-toolbar>
    </v-img>
    <v-divider class="mx-4 mb-1"></v-divider>    
    <v-card-item>
      <v-card-title>Cafe Badilico</v-card-title>

      <v-card-subtitle>
        <span class="me-1">Local Favorite</span>

        <v-icon
          color="error"
          icon="mdi-fire-circle"
          size="small"
        ></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-divider class="mx-4 mb-1"></v-divider>
    <v-card-title>Tonight's availability</v-card-title> 

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :model-value="4.5"
          color="amber"
          density="compact"
          half-increments
          readonly
          size="small"
        ></v-rating>

        <div class="text-grey ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • Italian, Cafe
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <div class="px-4">
      <v-chip-group v-model="selection">
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </div>

    <v-card-actions>
      <v-btn
        color="deep-purple-lighten-2"
        variant="text"
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>
</v-card>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
};
</script>

<style></style>
