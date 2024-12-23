<template>
    <div>
      <div class="signup-container">
        <h2>Sign Up</h2>
        <form @submit.prevent="signup">
          <div class="form-group">
            <label for="email">Email Address</label>
            <input
              type="email"
              id="email"
              v-model="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" id="btn">Sign Up</button>
          <p v-if="error" class="error-message">{{ error }}</p>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  
  export default {
    name: "signUpApp",
    data() {
      return {
        email: "",
        password: "",
        error: null,
      };
    },
    methods: {
      async signup() {
        this.error = null; // Resetează eroarea la fiecare încercare de signup
        const auth = getAuth();
  
        try {
          await createUserWithEmailAndPassword(auth, this.email, this.password);
          console.log("Cont creat cu succes!");
          this.$router.push("/home"); // Redirecționează către pagina principală
        } catch (error) {
          this.error = error.message; // Afișează eroarea în caz de eșec
          console.error("Eroare de signup:", this.error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Stiluri pentru signup */
  .signup-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin: 5px 0;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
  }
  
  .error-message {
    color: red;
    margin-top: 10px;
    font-size: 14px;
  }
  </style>
  