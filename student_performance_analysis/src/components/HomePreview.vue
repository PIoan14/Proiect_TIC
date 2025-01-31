<template>
  <div>
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Bine Ai venit...</a>
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
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="sidebar col-md-4 col-sm-4">
          <div> 
            <p  style="
                padding-top: 150px;
                padding-right: 70px;
                padding-left: 80px;
                text-align: justify;
                font-family: Georgia, 'Times New Roman', Times, serif;
                font-weight: bold;
                
              "
            >
              Bine ati venit in pagina principala a aplicatiei de monitorizare a 
              studentilor! Aici sunt listate optiunile pe care le puteti
              selecta in vederea efectuarii anumitor operatii precum : Afisarea studentilor,
              schimbarea anumitor date, stergerea lor, etc. De asemenea, in multe cazuri, pagina de analitice se poate dovedi a fi
              utilia, in special pentru vizualizarea grafica a performantei studentilor aflati in baza de date.
            </p>
          </div>
          <div class="books_div">
            <span class="books">&#128393;</span>
          </div>
        </div>
        <div class="main-content col-md-8 col-sm-8">
          <div class="BigTitle">Carduri pentru optiuni</div>
          <div class="row">
            <div class="card m-2" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">Vezi toti studentii</h5>
                <h6 class="card-subtitle mb-2 text-muted">...</h6>
                <p class="card-text">
                  Vor fi afisate date partiale pentru toti studentii
                  inregistrati in Firebase
                </p>
                <li>
                  <router-link style="font-family: 'Times New Roman', Times, serif;" to="/TotiElevii"
                    >Afiseaza toti Studentii</router-link
                  >
                </li>
              </div>
            </div>
            <div class="card m-2" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">Aplica Modificari</h5>
                <h6 class="card-subtitle mb-2 text-muted">...</h6>
                <p class="card-text">
                  Schimba date despre un anumit student gasit dupa ID. Se poate
                  realiza si stergerea studentului
                </p>
                <li><router-link  style="font-family: 'Times New Roman', Times, serif;" to="/UpdateElev">Modificari</router-link></li>
              </div>
            </div>
            <div class="card m-2" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">Instructiuni</h5>
                <h6 class="card-subtitle mb-2 text-muted">...</h6>
                <p class="card-text">
                  Citeste mai in detaliu instructiunile aplicatiei amplasate pe
                  cardul rotativ!
                </p>
                <li>
                  <router-link  style="font-family: 'Times New Roman', Times, serif;" to="/InstructiuniAplicatie"
                    >Instructiuni</router-link
                  >
                </li>
              </div>
            </div>
            <div class="card m-2" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">Analitice</h5>
                <h6 class="card-subtitle mb-2 text-muted">...</h6>
                <p class="card-text">
                  Analizeaza grafic evolutiile studentilor, realizat pe baza
                  notelor obtinute!
                </p>
                <li><router-link  style="font-family: 'Times New Roman', Times, serif;" to="/Analitice">Analitice</router-link></li>
              </div>
            </div>
            <div class="card m-2" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">Status</h5>
                <h6 class="card-subtitle mb-2 text-muted">...</h6>
                <p class="card-text">
                  Observa statusul tau in contextul logarii actuale.
                  Numele si parola pot fi schimbate din Firebase!
                </p>
                <li>
                  <router-link  style="font-family: 'Times New Roman', Times, serif;" to="/SetariProfil">Status</router-link>
                </li>
              </div>
            </div>
            <div class="card m-2" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">Sterge Cont</h5>
                <h6 class="card-subtitle mb-2 text-muted">...</h6>
                <p class="card-text">
                  Contul va fi sters din Auth Firebase. Inregistrarea va fi din
                  nou necesara in cazul revenirii in aplicatie
                </p>
                <router-link  style="font-family: 'Times New Roman', Times, serif;" to="/StergeCont">Stergere cont</router-link>
                
              </div>
            </div>
            <div class="card m-2" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">Adauga student</h5>
                <h6 class="card-subtitle mb-2 text-muted">...</h6>
                <p class="card-text">
                  Inregistreaza student in baza de date! Acesta va fi ulterior
                  afisat in panoul studentilor din sectiunea "Vezi toti
                  Studentii"
                </p>
                <li>
                  <router-link   style="font-family: 'Times New Roman', Times, serif;" to="/AdaugaStudent">Adauga student</router-link>
                </li>
              </div>
            </div>
            <div class="card m-2" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">Cauta elev</h5>
                <h6 class="card-subtitle mb-2 text-muted">...</h6>
                <p class="card-text">
                  Vezi date despre un anumit elev inregistrat in Firebase pe
                  baza unuia dintre atributele oferite in checklist!
                </p>
               

                <li>
                  <router-link  style="font-family: 'Times New Roman', Times, serif;" to="/CautaStudent">Cauta elev</router-link>
                </li>
              </div>
            </div>
            <div class="card m-2" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">Delogare</h5>
                <h6 class="card-subtitle mb-2 text-muted">...</h6>
                <p class="card-text">
                  Iesi din aplicatie...
                </p>

                <button @click="logout" id="Buton Delete" type="button" class="btn btn-dark">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Final -->
  </div>
</template>
<script>
import { getAuth, signOut } from "firebase/auth";

export default {
  name: "HomePreview",
  setup() {},
  methods: {
    logout() {
      const auth = getAuth();

      signOut(auth)
        .then(() => {
          console.log("Utilizatorul a fost delogat cu succes.");
          
          this.$router.push("/");
        })
        .catch((error) => {
          console.error("Eroare la delogare:", error.message);
        });
    },
  },
};
</script>
<style scoped></style>
