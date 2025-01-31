<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Status</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link class="r-link" to="/home">Acasa</router-link>
                </li>
                <li>
                  <router-link class="r-link" to="/AdaugaStudent"
                    >Adauga student</router-link
                  >
                </li>
                <li>
                  <router-link class="r-link" to="/Analitice"
                    >Analitice</router-link
                  >
                </li>
                <li>
                  <router-link class="r-link" to="/CautaStudent"
                    >Cauta elev</router-link
                  >
                </li>
                <li>
                  <router-link class="r-link" to="/InstructiuniAplicatie"
                    >Instructiuni</router-link
                  >
                </li>
                <li>
                  <router-link class="r-link" to="/SetariProfil"
                    >Status</router-link
                  >
                </li>
                <li>
                  <router-link class="r-link" to="/TotiElevii"
                    >Afiseaza toti Studentii</router-link
                  >
                </li>
                <li>
                  <router-link class="r-link" to="/UpdateElev"
                    >Modificari</router-link
                  >
                </li>
                <li>
                  <router-link class="r-link" to="/StergeCont"
                    >Stergere Cont</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <div class="sidebar col-md-2 col-sm-2">
          <div class="books_div">
            <span class="books">&#128393;</span>
          </div>
        </div>
        <div class="main-content col-md-8 col-sm-8">
          <h1 class="BigTitle text-center">User curent :</h1>
          <div class="row justify-content-center" style="padding-top: 100px">
            <!-- Central vertical line -->
            <div class="col-md-2 d-flex flex-column align-items-center">
            

              <div class="card m-2" style="width: 20rem">
                <div class="card-body">
                  <h5 class="card-title">Status</h5>
                  <p class="card-text">
                    Username actual :{{ user?.email || "Nicio informație" }}
                  </p>
                </div>
              </div>

             
            </div>
          </div>
        </div>
        <div
          class="col-md-2 col-sm-2 text-center"
          style="padding-top: 120px; padding-right: 220px"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getAuth,
 
} from "firebase/auth";
export default {
  name: "SetariProfil",
  setup() {},
  data() {
    return {
      newName: "",
      parola: "",
    };
  },
  computed: {
    user() {
      const auth = getAuth();
      const user = auth.currentUser;
      this.$store.dispatch("updateUser", {
        ...user,
        displayName: user.email,
      });
      console.log(this.$store.getters.getUser);
      return this.$store.getters.getUser;
    },
  },
  // methods: {
  //   async updateUserName() {
  //     const auth = getAuth();
  //     const user = auth.currentUser;
  //     console.log(this.$store.getters.getUser);

  //     if (user) {
  //       try {
  //         await updateProfile(user, {
  //           displayName: this.newName,
  //         });
  //         console.log("Username-ul a fost actualizat cu succes!");
  //       } catch (error) {
  //         console.error("Eroare la actualizarea username-ului:", error.message);
  //       }
  //     } else {
  //       console.log("Niciun utilizator autentificat.");
  //     }
  //   },

  //   //   if (user && this.newName.trim() && this.parola.trim()) {
  //   //     try {
  //   //       console.log("Vechi nume este:", user.email);
  //   //       const credential = EmailAuthProvider.credential(
  //   //         user.email,
  //   //         this.parola
  //   //       );
  //   //       await reauthenticateWithCredential(user, credential);
  //   //       console.log("User reauthenticated.");
  //   //       const actionCodeSettings = {
  //   //         // URL-ul la care utilizatorul va fi redirecționat după ce confirmă email-ul
  //   //         url: "http://192.168.100.27:8080/", // Asigură-te că această pagină există
  //   //         handleCodeInApp: true, // Permite ca link-ul să fie manipulabil în aplicația ta
  //   //       };

  //   //       try {
  //   //         await sendEmailVerification(user, actionCodeSettings);

  //   //         console.log("Sent");

  //   //         await new Promise((resolve) => {
  //   //           alert("Verifică-ți email-ul pentru a continua.");
  //   //           resolve();
  //   //         });
  //   //       } catch (error) {
  //   //         alert(error);
  //   //       }

  //   //       await updateEmail(user, this.newName);

  //   //       await user.reload();
  //   //       console.log("Noul nume este:", user.email);
  //   //       alert("Username schimbat!");
  //   //       this.$store.dispatch("updateUser", {
  //   //         ...user,
  //   //         displayName: this.newName,
  //   //       });
  //   //       console.log(this.newName);
  //   //     } catch (error) {
  //   //       alert(`Error: ${error.message}`);
  //   //       console.error("Error details:", error);
  //   //     }
  //   //   } else {
  //   //     alert("introdu nume valid!");
  //   //   }
  //   // },
  // },
};
</script>
