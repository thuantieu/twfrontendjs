<template>
  <v-container>
    <v-card class="elevation-12 mx-auto" max-width="600">
      <v-toolbar dark color="primary">
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form ref="registerForm" lazy-validation>
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="firstName"
                :rules="[rules.required]"
                label="First Name"
                maxlength="20"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="lastName"
                :rules="[rules.required]"
                label="Last Name"
                maxlength="20"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="password"
                :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                name="password"
                label="Password"
                hint="At least 8 characters"
                counter
                @click:append-inner="show1 = !show1"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                block
                v-model="verify"
                :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, passwordMatch]"
                :type="show1 ? 'text' : 'password'"
                name="confirm password"
                label="Confirm Password"
                counter
                @click:append-inner="show1 = !show1"
              ></v-text-field>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
              <v-btn block x-large @click="submitForm" color="success"
                >Register</v-btn
              >
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { HTTP } from "@/plugins/http-common.js";
export default {
  name: "Register",
  computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    },
  },
  methods: {
    async submitForm() {
      const userdata = {
        name: `${this.firstName} ${this.lastName}`,
        email: this.email,
        password: this.password,
      };
      await HTTP.post("api/users", userdata).then((res, err) => {
        if (err) {
          this.$refs.registerForm.reset();
          this.$store.dispatch("changeDialog", true);
          this.$store.dispatch(
            "changeDialogMessage",
            "Please input your info again!"
          );
          // this.$store.dispatch("changeDialog", {
          //   dialog: true,
          //   message: "Please input your info again!",
          // });
        }
        let resMessage = res.data;
        this.$refs.registerForm.reset();
        this.$router.push({ path: "/" });
        this.$store.dispatch("changeDialog", true);
        this.$store.dispatch("changeDialogMessage", resMessage.toString());
      });
    },
  },
  data: () => ({
    valid: false,

    firstName: "",
    lastName: "",
    email: "",
    password: "",
    verify: "",
    loginPassword: "",
    loginEmail: "",
    loginEmailRules: [
      (v) => !!v || "Required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    emailRules: [
      (v) => !!v || "Required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],

    show1: false,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => (v && v.length >= 8) || "Min 8 characters",
    },
  }),
};
</script>

<style lang="scss" scoped></style>
