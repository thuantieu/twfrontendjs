<template>
  <template v-for="item in $store.state.publicPosts" :key="item._id">
    <v-container>
      <v-card class="mx-auto" max-width="500">
        <div @click="getCurrentPost(item._id)">
          <v-toolbar density>
            <template v-slot:prepend>
              <v-avatar
                elevation="12"
                :color="`#${setAvatarColor()}`"
                size="large"
                >{{ avatarStr(item.user.name) }}</v-avatar
              >
              <v-card-title>
                {{ `${item.user.name}'s Post` }}
              </v-card-title>
            </template>
          </v-toolbar>
          <v-img
            height="300"
            class="text-white"
            :src="item.image === '' ? getdefaultImage : item.image"
            cover
          >
          </v-img>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text>
            <span style="white-space: pre-wrap">
              {{ item.content }}
            </span>
          </v-card-text>
        </div>
        <v-card-text>
          <v-divider></v-divider>
          <v-chip-group :disabled="$store.state.token == '' ? true : false">
            <v-chip @click="interaction(item._id, { like: item.like + 1 })">
              <v-icon size="x-large" icon="mdi-heart" color="pink"></v-icon>
              &ensp;{{ item.like }}
            </v-chip>

            <v-chip
              @click="interaction(item._id, { dislike: item.dislike + 1 })"
            >
              <v-icon
                size="x-large"
                icon="mdi-emoticon-sad"
                color="warning"
              ></v-icon>
              &ensp;{{ item.dislike }}
            </v-chip>

            <v-chip @click="getCurrentPost(item._id)">
              <v-icon
                size="x-large"
                icon="mdi-chat-outline"
                color="blue"
              ></v-icon>
              &ensp;{{ item.comment.length }}
            </v-chip>
          </v-chip-group>
          <v-chip color="info" label v-show="$store.state.token == ''">
            You need to login to interact this post!
          </v-chip>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
</template>

<script>
import { HTTP } from "@/plugins/http-common";
export default {
  name: "Home",
  data: () => ({
    loading: false,
    selection: 1,
    comment: "",
    love: 1,
    defaultImage: "https://ik.imagekit.io/pp2d3uqowp/social-gda26e3234_640.jpg",
  }),
  computed: {
    getdefaultImage() {
      return this.$store.state.defaultImage;
    },
  },
  methods: {

    getCurrentPost(id) {
      HTTP.get(`api/public/${id}`).then((res, err) => {
        if (res.status == 200) {
          this.$store.dispatch("getCurrentPost", res.data);
          this.$store.dispatch("getCurrentPostId", id);
          console.log(this.$store.state.currentPost);
          // this.$store.dispatch("setPostDialog", true);
          this.$router.push({ path: "/post" });
        } else {
          console.log(err);
        }
      });
    },
    avatarStr(text) {
      let letter = text.toString();
      const attr = letter.slice(0, 2).toUpperCase();

      return attr;
    },
    setAvatarColor() {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      return randomColor;
    },
    getPublicPosts() {
      HTTP.get("api/public").then((res) => {
        this.$store.dispatch("getPublicPosts", res.data);
      });
    },
    interaction(id, data) {
      const config = {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      };
      HTTP.patch(`api/post/${id}`, data, config).then((res) => {
        console.log(res.data);
        this.getPublicPosts();
      });
    },
  },
  mounted() {
    this.getPublicPosts();
  },
};
</script>

<style></style>
