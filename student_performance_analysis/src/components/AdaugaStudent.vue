<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Adaugare elev</a>
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
                    >Setari Profil</router-link
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
          <h1 class="BigTitle text-center">Adauga student</h1>
          <div class="row justify-content-center" style="padding-bottom: 15px">
            <div class="card" style="padding-bottom: 15px; width: 35rem">
              <form>
                <div class="mb-3">
                  <label class="form-label" style="padding-top: 5px"
                    >Nume si prenume</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                    minlength="2"
                    autocomplete="off"
                    v-model="student.nume_si_prenume"
                  />
                  <div id="emailHelp" class="form-text">
                    Numele si prenumele vor fi o singura variabila.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Email</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputPassword1"
                    required
                    minlength="2"
                    autocomplete="off"
                    v-model="student.email"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >ID Elev</label
                  >
                  <input
                    class="form-control"
                    id="exampleInputPassword1"
                    required
                    minlength="2"
                    autocomplete="off"
                    v-model="student.id_elev"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Varsta</label
                  >
                  <input
                    class="form-control"
                    id="exampleInputPassword1"
                    required
                    minlength="2"
                    autocomplete="off"
                    v-model="student.varsta"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Adresa de domiciliu</label
                  >
                  <input
                    class="form-control"
                    id="exampleInputPassword1"
                    required
                    minlength="2"
                    autocomplete="off"
                    v-model="student.adresa"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >CNP</label
                  >
                  <input
                    class="form-control"
                    id="exampleInputPassword1"
                    required
                    minlength="2"
                    autocomplete="off"
                    v-model="student.cnp"
                  />
                </div>

                <button
                  @click="submitData"
                  type="submit"
                  class="btn btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getAuth } from "firebase/auth";
import { addStudent } from "./actions.js";
export default {
  name: "AdaugaElev",
  setup() {},
  data() {
    return {
      student: {
        id_elev: "",
        nume_si_prenume: "",
        cnp: "",
        varsta: "",
        adresa: "",
        email: "",
        note: {
          materia_1: [],
          materia_2: [],
          materia_3: [],
        },
      },
    };
  },
  methods: {
    getToken() {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        if (user) {
          return user.getIdToken();
        } else {
          return null;
        }
      }
    },
    async submitData(event) {
      event.preventDefault();
      console.log(this.student);
      const token = await this.getToken();
      console.log(`Avem token : ${token}`);
      console.log("Suntem la verificare");
      var check = 1;

      await fetch("http://localhost:3000/verif-jwt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Adaugă Bearer tokenul
        },
        body: JSON.stringify({ data: "" }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Răspuns de la server:", data);
          alert("Token verificat cu succes");
        })
        .catch((error) => {
          console.error("Eroareee:", error);
          check = 0;
        });

      try {
        this.student.id_elev = Number(this.student.id_elev);
        console.log(this.student.id_elev)
        if (isNaN(this.student.id_elev)) {
          throw new Error("Id ul trebuie sa fie un numar!");
        }
      } catch (error) {
        alert(error);
      }

      try {
        this.student.varsta = parseInt(this.student.varsta, 10);
        if (isNaN(this.student.varsta)) {
          throw new Error(
            "Conversia la număr a eșuat. Valoarea nu este un număr valid."
          );
        }
        if (this.student.varsta > 100) {
          throw new Error("Varsta prea mare");
        }
      } catch (error) {
        check = 0;
        alert(error);
      }

      try {
        if (this.student.email.includes("@")) {
          console.log("Email ok");
        } else {
          throw new Error("Format de email incorect");
        }
      } catch (error) {
        check = 0;
        alert(error);
      }

      try {
        if (this.student.nume_si_prenume.length < 5) {
          throw new Error(
            "Numele si prenumele trebuie sa fie mai lungi de 5 caractere!"
          );
        }
      } catch (error) {
        check = 0;
        alert(error);
      }
      if (check === 1) {
        addStudent(this.student);

        setTimeout(() => {
          location.reload();
        }, 5000);
      }
    },
  },
};
</script>
