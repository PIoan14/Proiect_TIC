<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="sidebar col-md-2 col-sm-2">
          <div class="books_div">
            <span class="books">&#128393;</span>
          </div>
        </div>
        <div class="main-content col-md-8 col-sm-8">
            <form @submit.prevent="login">
          <h1 class="BigTitle text-center">
            Schimba numele de utilizator sau parola
          </h1>
          <div class="row justify-content-center">
            <!-- Central vertical line -->
            <div class="col-md-2 d-flex flex-column align-items-center">
              <div class="card m-2" style="width: 30rem">
                <div class="card-body">
                  <h5 class="card-title">Credentiale :</h5>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      v-model="email"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                       autocomplete="Username"
                      required
                    />
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Parola"
                      aria-label="Username"
                      v-model="password"
                      aria-describedby="basic-addon1"
                      required
                    />
                  </div>
                  <button type="submit" class="btn btn-dark">Dark</button>
                </div>
              </div>
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "loginApp",
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async login() {
      this.error = null;
      const auth = getAuth();

      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        console.log("Login cu succes!");
        this.$router.push("/home");
      } catch (error) {
        this.error = error.message;
        console.error("Eroare de login:", this.error);
        alert("Credentiale incorecte");
      }
    },
  },
};
</script>
