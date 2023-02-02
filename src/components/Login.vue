<template>
  <v-container>
    <v-card class="elevation-12 mx-auto" max-width="500">
      <v-toolbar dark color="primary">
        <v-toolbar-title>Login</v-toolbar-title>
      </v-toolbar>

      <v-container>
        <v-card-text>
          <v-form ref="loginFrom">
            <v-text-field
              prepend-icon="mdi-account"
              name="User name"
              label="User name"
              type="text"
              variant="solo"
              v-model="email"
              hint="User name is also email"
            >
            </v-text-field>
            <v-text-field
              variant="solo"
              id="password"
              prepend-icon="mdi-lock"
              name="password"
              label="Password"
              v-model="password"
              :type="showpass ? 'text' : 'password'"
              :append-inner-icon="showpass ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append-inner="showpass = !showpass"
            ></v-text-field>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            @click="sendLogin"
            color="primary"
            prepend-icon="mdi-login"
            variant="flat"
            block
          >
            Login
          </v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import { HTTP } from "@/plugins/http-common";

export default {
  name: "Login",
  data: () => ({
    showpass: false,
    email: "",
    password: "",
  }),

  methods: {
    async sendLogin() {
      const userData = {
        email: this.email,
        password: this.password,
      };
      await HTTP.post("api/users/login", userData).then((res, err) => {
        if (err) {
          this.$refs.loginFrom.reset();
          // this.$store.dispatch("changeDialog", true);
          this.$store.dispatch(
            "changeDialogMessage",
            "Please input your info again!"
          );
        }
        if (res.status == 201) {
          let resMessage = res.data.message;
          let token = res.data.token;
          this.$refs.loginFrom.reset();

          this.$store.dispatch("setToken", token.toString());
          this.$store.dispatch("changeLogin", true);
          this.$router.push({ path: "/" });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
