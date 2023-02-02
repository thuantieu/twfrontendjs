<template>
  <!-- <v-dialog
    v-model="$store.state.postDialog"
    activator="parent"
    max-width="700"
    overlay-color="black"
    overlay-opacity="5"
    scrollable
  > -->
  <v-container>
    <v-card class="mx-auto" max-width="700">
      <v-toolbar density>
        <template v-slot:prepend>
          <v-avatar elevation="12" :color="`#${setAvatarColor()}`">{{
            avatarStr(getCurrentPost.user.name)
          }}</v-avatar>
        </template>
        <v-card-title>
          {{ `${getCurrentPost.user.name}'s Post` }}
        </v-card-title>
        <template v-slot:append>
          <v-icon
            elevation="12"
            @click="closePost"
            icon="mdi-close-box"
            :color="`#${setAvatarColor()}`"
            size="x-large"
          ></v-icon>
        </template>
      </v-toolbar>
      <v-img
        height="400"
        class="text-white"
        :src="
          getCurrentPost.image === '' ? getdefaultImage : getCurrentPost.image
        "
        cover
      >
      </v-img>

      <v-card-title>{{ getCurrentPost.title }}</v-card-title>
      <v-card-text>
        <span style="white-space: pre-wrap">
          {{ getCurrentPost.content }}
        </span>
      </v-card-text>

      <v-card-text>
        <v-divider></v-divider>
        <v-chip-group :disabled="$store.state.token == '' ? true : false">
          <v-chip
            @click="
              interaction(getCurrentPost._id, {
                like: getCurrentPost.like + 1,
              })
            "
          >
            <v-icon size="x-large" icon="mdi-heart" color="pink"></v-icon>
            &ensp;{{ getCurrentPost.like }}
          </v-chip>

          <v-chip
            @click="
              interaction(getCurrentPost._id, {
                dislike: getCurrentPost.dislike + 1,
              })
            "
          >
            <v-icon
              size="x-large"
              icon="mdi-emoticon-sad"
              color="warning"
            ></v-icon>
            &ensp;{{ getCurrentPost.dislike }}
          </v-chip>

          <v-chip>
            <v-icon
              size="x-large"
              icon="mdi-chat-outline"
              color="blue"
            ></v-icon>
            &ensp;{{ getCurrentPost.comment.length }}
          </v-chip>
        </v-chip-group>
        <v-chip color="info" label v-show="$store.state.token == ''">
          You need to login to interact this post!
        </v-chip>
      </v-card-text>
      <v-cart-text>
        <v-container v-if="$store.state.token.length > 0">
          <v-text-field
            @click:append-inner="postComment"
            variant="solo"
            label="Comment"
            append-inner-icon="mdi-send"
            v-model="newCommentText"
          ></v-text-field>
        </v-container>
        <template v-if="getCurrentPost.comment.length > 0">
          <v-divider></v-divider>
          <v-card-title> Comments </v-card-title>
          <v-sheet
            color="white"
            outlined
            rounded
            shaped
            elevation="1"
            width="100%"
          >
            <v-container>
              <template v-for="com in item.comment" :key="com.id">
                <v-row v-model="item.comment.text" no-gutters>
                  <v-col cols="1">
                    <v-sheet color="white" class="pa-2 ma-2">
                      <v-avatar :color="`#${setAvatarColor()}`">{{
                        avatarStr(com.name)
                      }}</v-avatar>
                    </v-sheet>
                  </v-col>
                  <v-col>
                    <v-sheet color="white" class="pa-2 ma-2">
                      {{ com.name }} <br />
                      {{ com.text }}
                    </v-sheet>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
              </template>
            </v-container>
          </v-sheet>
        </template>
      </v-cart-text>
    </v-card>
  </v-container>
  <!-- </v-dialog> -->
</template>

<script>
import { getUserInfo } from "@/plugins/authentication-support";
import { HTTP } from "@/plugins/http-common";
export default {
  name: "Post",

  data: () => ({
    item: {},
    id: "",
    user: {},
    newCommentText: "",
  }),
  methods: {
    setAvatarColor() {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      return randomColor;
    },
    avatarStr(text) {
      let letter = text.toString();
      const attr = letter.slice(0, 2).toUpperCase();

      return attr;
    },
    async interaction(id, data) {
      const config = {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      };
      // console.log(this.$store.state.token);
      await HTTP.patch(`api/post/${id}`, data, config)
      

      await HTTP.get(`api/public/${id}`).then((res, err) => {
        if (res.status == 200) {
          this.$store.dispatch("getCurrentPost", res.data);
          this.$store.dispatch("getCurrentPostId", id);
          console.log(this.$store.state.currentPost);
          
        } else {
          console.log(err);
        }
      })

    },
    async postComment () {
      
      await this.interaction(this.getCurrentPost._id, {
                comment: [
                  {
                    user: this.user.user,
                    name: this.user.name,
                    text: this.newCommentText,
                  },
                  ...this.getCurrentPost.comment,
                ],
              })
       this.newCommentText = ''
      
       this.$router.push({ path: "/post" }); 
    },
    closePost() {
      this.$router.push({ path: "/" });
    },
  },
  computed: {
    getCurrentPost() {
      this.item = this.$store.state.currentPost;
      // console.log(this.item);
      return this.item;
    },
    getdefaultImage() {
      return this.$store.state.defaultImage;
    },
  },
  async created() {
    // this.getCurrentPost()
    if (this.$store.state.token.length > 0) {
      let token = this.$store.state.token;
      this.user = await getUserInfo(token);
      // console.log(this.user);
    }
  },
};
</script>

<style lang="scss" scoped></style>
