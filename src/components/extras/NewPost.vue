<template>
  <v-container v-show="$store.state.islogin">
    <v-card class="elevation-12 mx-auto" max-width="600">
      <v-toolbar dark color="primary">
        <v-toolbar-title>New Post </v-toolbar-title>
        <!-- {{ statusSign }} -->
      </v-toolbar>

      <v-card-text>
        <v-container>
          <v-form ref="newPost">
            <v-row>
              <v-text-field
                v-model="title"
                label="Title"
                maxlength="30"
                required
              ></v-text-field>
            </v-row>
            <v-row>
              <v-textarea
                v-model="content"
                label="Content"
                maxlength="300"
                rows="8"
                required
              ></v-textarea>
            </v-row>
            <v-row>
               <v-switch color="primary" :label="`Post status: ${statusSign}`" v-model="switchValue"></v-switch>
            </v-row>
            <v-row>
              <v-btn @click="sendPost" block x-large color="success">Post</v-btn>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { HTTP } from "@/plugins/http-common";

export default {
  name: "NewPost",
  methods: {
    async sendPost() {
      const postData = {
        title: this.title,
        content: this.content,
        status: this.statusSign,
        image: "https://ik.imagekit.io/pp2d3uqowp/social-gda26e3234_640.jpg",
      };
      const config = {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      };

      // console.log(postData);

      await HTTP.post("api/post", postData, config).then((res, err) => {
        if (err) {
          this.$store.dispatch("changeDialog", true);
          this.$store.dispatch(
            "changeDialogMessage",
            "Please input your info again!"
          );
          console.log(err);
        }
        if (res.status == 201) {
          this.$store.dispatch("changeDialog", true);
          this.$store.dispatch("changeDialogMessage", res.data);
        }
      });
      this.$refs.newPost.reset();
      this.$router.push({ path: "/" });
    },
  },
  data: () => ({
    title: "",
    content: "",
    switchValue: false,
    // status: "public",
  }),
  computed: {
    statusSign() {
      if (this.switchValue === false) {
        // this.status = "public";
        return "public";
      } else {
        // this.status = "private";
        return "private"; 
      }
    },
  },
  //   mounted() {
  //     this.$refs.newPost.reset()
  //   }
};
</script>

<style lang="scss" scoped></style>
