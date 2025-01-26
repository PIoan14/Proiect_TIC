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
        <div class="main-content col-md-12 col-sm-12">
          <div class="BigTitle">Carduri asociate elevilor</div>
          <div class="row">
            <div class="card m-2" style="width: 23rem">
              <div class="card-body">
                <h5 class="card-title">Hint!</h5>
                <h6 class="card-subtitle mb-2 text-muted">...</h6>

                <p class="card-text">
                  Selecteaza una dintre optiunile de update. Modificarea va fi
                  facuta aspra unui student cautat pe baza id-ului sau
                </p>
                <span style="font-size: 100px">&#128393;</span>
              </div>
            </div>
            <div class="card m-2" style="width: 23rem">
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
                      @change="schimba"
                      type="radio"
                      name="searchOption"
                      value="grupa"
                    />
                    Grupa</label
                  >
                </div>
                <div>
                  <label
                    ><input
                      @change="schimba"
                      type="radio"
                      name="searchOption"
                      value="media"
                    />
                    Medie totala rotunjita</label
                  >
                </div>
                <div>
                  <label
                    ><input
                      @change="schimba"
                      type="radio"
                      name="searchOption"
                      value="toti"
                    />
                    Toti studentii</label
                  >
                </div>
              </form>

              <div></div>
            </div>
            <div class="card m-2" style="width: 23rem">
              <div class="card-body">
                <h5 class="card-title">Aplica Modificari</h5>
                <h6 class="card-subtitle mb-2 text-muted">...</h6>
                <div style="padding-bottom: 2px">
                  <label for="searchInput">Criteriu de căutare:</label>
                  <input id="key" type="text" disabled />

                  <div style="padding-top: 10px">
                    <button id="s_btn" type="button" class="btn btn-info">
                      Afiseaza
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="card m-2" style="width: 23rem">
              <div class="card-body">
                <h5 class="card-title">Output</h5>
                <h6 class="card-subtitle mb-2 text-muted">...</h6>

                <p class="card-text">
                  Rezultatele cautarii vor fii listate dedesubt intr-un output
                  de forma unui tabel!
                </p>
                <span style="font-size: 100px">&#128393;</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-sm-12 text-center">
            <div class="row" style="padding-top: 10px">
              <div
                v-if="tabel"
                style="font-family: Ink Free, cursive; font-weight: bold"
              >
                <h2>Rezultate :</h2>
              </div>

              <div v-if="tabel" class="card m-2" style="width: 98rem">
                <div class="card-body">
                  <table id="tabelStudenti" class="table">
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
                        <th scope="col">Media Totala</th>
                        <th scope="col">Grupa</th>
                      </tr>
                    </thead>
                    <tbody class="table-group-divider">
                      <tr v-for="(item, index) in de_afisat" :key="index">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ item.id_elev }}</td>
                        <td>{{ item.nume_si_prenume }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.adresa }}</td>
                        <td>{{ item.cnp }}</td>
                        <td>{{ item.varsta }}</td>
                        <td>{{ item.note.materia_1 }}</td>
                        <td>{{ item.note.materia_2 }}</td>
                        <td>{{ item.note.materia_3 }}</td>
                        <td>{{ item.Medie }}</td>
                        <td>{{ item.grupa }}</td>
                      </tr>
                    </tbody>
                  </table>
                  <button class="btn btn-primary" @click="downloadExcel()">Descarcă tabelul în Excel</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-2 col-sm-2 text-center"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { find, findAll } from "./actions.js";
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
      medie: 0,
    };
  },
  methods: {
    refresh() {
      setTimeout(() => {
        location.reload();
      }, 1000);
    },
    downloadExcel() {
      // Obține tabelul
      const table = document.getElementById('tabelStudenti');

      // Creează o variabilă pentru conținutul tabelului
      let tableHTML = table.outerHTML.replace(/ /g, '%20');

      // Creează un fișier Blob care să conțină tabelul în format Excel
      const dataType = 'application/vnd.ms-excel';
      const fileName = 'Studenti_Aplicatie_Firebase_Paul.xls'; // Numele fișierului descărcat

      // Creează un link temporar pentru descărcare
      const downloadLink = document.createElement('a');
      downloadLink.href = `data:${dataType}, ${tableHTML}`;
      downloadLink.download = fileName;

      // Simulează un click pe link pentru a începe descărcarea
      downloadLink.click();
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

        if (this.key == "toti") {
          this.de_afisat = findAll();
          const promise = new Promise((resolve) => {
            setTimeout(() => resolve(this.de_afisat), 1000);
          });

          promise.then((result) => {
            console.log("Sa vedem daca e bine");
            console.log(result);
            this.de_afisat = result;

            for (let i = 0; i < this.de_afisat.length; i++) {
              let vector = [];
              vector = vector.concat(this.de_afisat[i].note.materia_1);
              vector = vector.concat(this.de_afisat[i].note.materia_2);
              vector = vector.concat(this.de_afisat[i].note.materia_3);
              console.log(vector);
              var l = vector.length;
              for (let i = 0; i < vector.length; i++) {
                if (vector[i] == null) {
                  l -= 1;
                  continue;
                } else {
                  this.medie += vector[i];
                }
              }
              this.medie = this.medie / l;
              this.medie = Math.round(this.medie);
              console.log(this.medie);
              this.de_afisat[i]["Medie"] = this.medie;
              this.medie = 0;
            }
          });
          this.tabel = true;
          return;
        }

        if (this.key == "media") {
          this.value = Number(this.value);
          console.log(`Val ${this.value}`);
          if (isNaN(this.value)) {
            alert("Media inserata trebuie sa fie un numar");

            return;
          }
          this.de_afisat = findAll();
          const promise = new Promise((resolve) => {
            setTimeout(() => resolve(this.de_afisat), 1000);
          });

          promise.then((result) => {
            console.log("Sa vedem daca e bine");
            console.log(result);
            this.de_afisat = result;

            for (let i = 0; i < this.de_afisat.length; i++) {
              let vector = [];
              vector = vector.concat(this.de_afisat[i].note.materia_1);
              vector = vector.concat(this.de_afisat[i].note.materia_2);
              vector = vector.concat(this.de_afisat[i].note.materia_3);
              console.log(vector);
              var l = vector.length;
              for (let i = 0; i < vector.length; i++) {
                if (vector[i] == null) {
                  l -= 1;
                  continue;
                } else {
                  this.medie += vector[i];
                }
              }
              this.medie = this.medie / l;
              this.medie = Math.round(this.medie);
              console.log(this.medie);
              this.de_afisat[i]["Medie"] = this.medie;
              this.medie = 0;

              var de_afisat_selectat_pe_medie = [];

              for (let i = 0; i < this.de_afisat.length; i++) {
                //console.log(this.de_afisat[i].Medie)

                if (this.de_afisat[i].Medie == this.value) {
                  console.log("FOUND cv");
                  de_afisat_selectat_pe_medie =
                    de_afisat_selectat_pe_medie.concat(this.de_afisat[i]);
                }
              }
              this.de_afisat = de_afisat_selectat_pe_medie;
            }
          });

          this.tabel = true;
          return;
        }

        if (this.key === "id_elev" || this.key === "grupa") {
          this.value = Number(this.value);
        }

        console.log(this.value + "");
        console.log("+++++++++++++++++");

        try {
          this.de_afisat = find(this.key, this.value);
          console.log(this.de_afisat);
          const promise = new Promise((resolve) => {
            setTimeout(() => resolve(this.de_afisat), 1000);
          });

          promise.then((result) => {
            console.log("Sa vedem daca e bine");
            console.log(result);
            this.de_afisat = result;

            try {
              var a = this.de_afisat.length;
              console.log(a);
            } catch {
              alert(
                `Nu s-au gasit observatii asociate cu parametrul trimis pentru ${this.key}`
              );
              this.refresh();
              return;
            }

            for (let i = 0; i < this.de_afisat.length; i++) {
              let vector = [];
              vector = vector.concat(this.de_afisat[i].note.materia_1);
              vector = vector.concat(this.de_afisat[i].note.materia_2);
              vector = vector.concat(this.de_afisat[i].note.materia_3);
              console.log(vector);
              var l = vector.length;
              for (let i = 0; i < vector.length; i++) {
                if (vector[i] == null) {
                  l -= 1;
                  continue;
                } else {
                  this.medie += vector[i];
                }
              }
              this.medie = this.medie / l;
              console.log(this.medie);
              this.de_afisat[i]["Medie"] = this.medie;
              this.medie = 0;
            }

            this.tabel = true;
          });
        } catch (error) {
          alert(error);
        }
      });
    },
  },
};
</script>
