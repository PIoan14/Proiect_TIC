<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Cautare elevi</a>
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
        <div class="col-md-3 col-sm-3 text-center">
          <div class="books_div">
            <span class="books">&#128393;</span>
          </div>
        </div>
        <div class="main-content col-md-9 col-sm-9">
          <div class="BigTitle">Carduri asociate elevilor</div>
          <div class="row">
            <div class="card" style="width: 20rem">
              <h3>Caută student după:</h3>
              <form class="search" id="ckForm">
                <div>
                  <label
                    ><input
                      @change="schimba"
                      type="radio"
                      name="searchOption"
                      value="id_elev"
                    />
                    ID</label
                  >
                </div>
                <div>
                  <label
                    ><input
                      @change="schimba"
                      type="radio"
                      name="searchOption"
                      value="nume_si_prenume"
                    />
                    Nume si Prenume</label
                  >
                </div>
                <div>
                  <label
                    ><input
                      @change="schimba"
                      type="radio"
                      name="searchOption"
                      value="email"
                    />
                    Email</label
                  >
                </div>
                <div>
                  <label
                    ><input
                      @change="schimba"
                      type="radio"
                      name="searchOption"
                      value="cnp"
                    />
                    CNP</label
                  >
                </div>
                <div>
                  <label
                    ><input
                      @change="schimba"
                      type="radio"
                      name="searchOption"
                      value="Adresa"
                    />
                    adresa</label
                  >
                </div>
                <div>
                  <label
                    ><input
                      @change="switchnota"
                      type="radio"
                      name="searchOption"
                      value="Note"
                    />
                    note</label
                  >
                </div>
                <div v-if="bifat" id="noteInput" class="hidden">
                  <label for="nota">Index nota:</label>
                  <input
                    placeholder="Un numar anume"
                    type="number"
                    id="nota-index"
                    name="nota"
                  />
                  <label placeholder="De la 1 la 10" for="nota"
                    >Alege nota:</label
                  >
                  <input type="number" id="nota-value" name="nota" />
                  <label for="nota">Alege materia:</label>
                  <input
                    placeholder="De la 1 la 3 in acest caz"
                    type="number"
                    id="materie"
                    name="n"
                  />
                </div>
              </form>
              <div></div>
            </div>
            <div class="card" style="width: 25rem">
              <div class="card-body">
                <h5 class="card-title">Aplica Modificari</h5>
                <h6 class="card-subtitle mb-2 text-muted">...</h6>
                <div style="padding-bottom: 2px">
                  <label for="searchInput">Criteriu de căutare:</label>
                  <input id="key" type="text" disabled />

                  <div style="padding-top: 10px">
                    <button id="s_btn" type="button" class="btn btn-info">
                      Commit
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="card" style="width: 20rem">
              <div class="card-body">
                <h5 class="card-title">Output</h5>
                <h6 class="card-subtitle mb-2 text-muted">...</h6>

                <p class="card-text">
                  Rezultatele cautarii vor fii listate dedesubt intr-un output
                  de forma unui tabel!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 col-sm-2 text-center"></div>
          <div class="col-md-9 col-sm-9 text-center">
            <div class="row">
              <table v-if="tabel" class="table">
                <thead>
                  <tr>
                    <th scope="col">Rez nr</th>
                    <th scope="col">ID_Elev</th>
                    <th scope="col">Nume si prenume</th>
                    <th scope="col">Email</th>
                    <th scope="col">Adresa</th>
                    <th scope="col">CNP</th>
                    <th scope="col">Varsta</th>
                    <th scope="col">Note Materia 1</th>
                    <th scope="col">Note Materia 2</th>
                    <th scope="col">Note Materia 3</th>
                    
                  </tr>
                </thead>
                <tbody class="table-group-divider">
                  <tr v-for="(item, index) in de_afisat" :key="index">
                    <th scope="row">{{ index +1 }}</th>
                    <td>{{ item.id_elev }}</td>
                    <td>{{ item.nume_si_prenume }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.adresa }}</td>
                    <td>{{ item.cnp }}</td>
                    <td>{{ item.varsta }}</td>
                    <td>{{ item.note.materia_1 }}</td>
                    <td>{{ item.note.materia_2 }}</td>
                    <td>{{ item.note.materia_3 }}</td>
                   
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="col-md-2 col-sm-2 text-center"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { find } from "./actions.js";
export default {
  name: "CautaElev",
  setup() {},
  data() {
    return {
      value: "",
      key: "",
      bifat: false,
      de_afisat: [],
      tabel: false,
    };
  },
  methods: {
    switchnota() {
      this.bifat = true;
      const button = document.getElementById("s_btn");
      button.addEventListener("click", () => {
        try {
          const index_nota_dom = document.getElementById("nota-index");
          const index_nota = index_nota_dom.value;
          const valoare_nota_dom = document.getElementById("nota-value");
          const valoare_nota = valoare_nota_dom.value;
          const materie_dom = document.getElementById("materie");
          const materie = materie_dom.value;

          console.log(index_nota, valoare_nota, materie);
          try {
            if ((materie > 3) | (materie < 1)) {
              throw new Error("Alege o materie de la 1 la 3");
            }
            if ((valoare_nota > 10) | (valoare_nota < 1)) {
              throw new Error("Alege o nota de la 1 la 10");
            }

            const valoare = document.getElementById("key");
            console.log(valoare);
          } catch (error) {
            alert(error);
          }
        } catch {
          alert("Scrie numarul corespunzator materiei si nota p");
        }
      });
    },
    schimba() {
      this.bifat = false;

      const checkList = document.getElementById("ckForm");

      checkList.addEventListener("change", (event) => {
        console.log(`Opțiune selectată: ${event.target.value}`);
        this.key = event.target.value;
        document.getElementById("key").disabled = false;
        console.log(this.key);
      });
      const button = document.getElementById("s_btn");
      button.addEventListener("click", () => {
        this.value = document.getElementById("key").value;
        
        if (this.key === 'id_elev'){
          this.value = Number(this.value)
        }
        
        console.log(this.value + "");
        console.log("+++++++++++++++++");

        try {
          this.de_afisat = find(this.key, this.value);
          const promise = new Promise((resolve) => {
            setTimeout(() => resolve(this.de_afisat), 1000);
          });

          promise.then((result) => {
            console.log("Sa vedem daca e bine");
            console.log(result);
            this.de_afisat = result;
            
            this.tabel = true
          });
        } catch (error) {
          alert(error);
        }
      });
    },
  },
};
</script>
