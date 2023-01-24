<template>
  <v-container>
    <v-card class="elevation-12 mx-auto" max-width="500">
      <v-toolbar dark color="primary">
        <v-toolbar-title>Login</v-toolbar-title>
      </v-toolbar>

      <v-container>
        <v-card-text>
          <v-form>
            <v-text-field
              prepend-icon="mdi-account"
              name="login"
              label="Login"
              type="text"
              variant="solo"
            >
            </v-text-field>
            <v-text-field
              variant="solo"
              id="password"
              prepend-icon="mdi-lock"
              name="password"
              label="Password"
              :type="showpass ? 'text' : 'password'"
              :append-inner-icon="showpass ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append-inner="showpass = !showpass"
            ></v-text-field>
          </v-form>
        </v-card-text>
      
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" prepend-icon="mdi-login" variant="flat" to="/"
            >Login</v-btn
          >
        </v-card-actions>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    showpass: false,
  }),
};
</script>

<style lang="scss" scoped></style>
