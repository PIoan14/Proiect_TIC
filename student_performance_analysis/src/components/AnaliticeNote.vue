<template>
  <div>
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Analitice</a>
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
        <div
          class="sidebar col-md-4 col-sm-4"
          style="
            padding-top: 120px;
            padding-right: 50px;
            padding-left: 80px;
            font-family: Ink Free;
          "
        >
          >
         
          
          <div>
            <p
              style="
                padding-top: 50px;
                padding-right: 50px;
                text-align: justify;
                font-family: Georgia, 'Times New Roman', Times, serif;
                font-weight: bold;
                
              "
            >
              O pagină de intrare într-o aplicație de monitorizare a studenților
              este punctul de acces principal pentru utilizatori, oferind o
              interfață simplă și intuitivă. Aceasta include câmpuri pentru
              autentificare, precum adresa de email și parola, și poate oferi
              opțiuni suplimentare, cum ar fi "Am uitat parola" sau
              "Înregistrare" pentru utilizatorii noi.
            </p>
          </div>
          <div class="books_div">
            <span class="books">&#128393;</span>
          </div>
        </div>
        <div class="main-content col-md-7 col-sm-7">
          <div class="row">
            <div class="BigTitle">Pagina de analitice</div>
            <div class="row">
              <div > 
                  <h4 style="text-align: left;font-style: italic;">
                    Analiza colectiva
                  </h4>
                </div>
              <div class="card m-2" style="width: 25rem;">
                <div class="card-body">
                  <h5 class="card-title">Analitice</h5>
                  <h6 class="card-subtitle mb-2 text-muted">...</h6>
                  <p class="card-text">
                    Analizeaza grafic evolutiile studentilor, realizat pe baza
                    notelor obtinute!
                  </p>
                  <input
                    id="inpHist"
                    placeholder="Numarul Grupei pentru histograma"
                  />

                  <button
                    @click="setGroup"
                    type="button"
                    class="btn btn-primary"
                    style="padding-left: 2px"
                  >
                    Submit
                  </button>
                </div>
              </div>
              <div class="card m-2" style="width: 25rem;">
                <div class="card-body">
                  <h5 class="card-title">Hint!</h5>
                  <h6 class="card-subtitle mb-2 text-muted">...</h6>
                  <p style="text-align: justify; font-family: Georgia, 'Times New Roman', Times, serif; ">
                    Ca stare initiala, histograma arata distributia tutror notelor existente (situatia generala a elevilor).
                    Daca doriti sa se vada distributia pentru o singura grupa, scrieti numarul acesteia in partea stanga.
                    Daca doriti revenire la situatia generala, introduceti 0 sau faceti refresh.
                  </p>
                  
                </div>
              </div>
              
             
                <div class="card m-2" style="width: 51rem">
                  <div class="card-body">
                    
                      <canvas id="hist" style="width: 90%;"></canvas>
                    
                  </div>
                </div>
                <div style="padding-top: 20px;"> 
                  <h4 style="text-align: left; font-style: italic;">
                    Analiza individuala
                  </h4>
                </div>
                
              
              

              <div class="card m-2" style="width: 25rem;">
                <div class="card-body">
                  <h5 class="card-title">Analitice</h5>
                  <h6 class="card-subtitle mb-2 text-muted">...</h6>
                  <p class="card-text">
                    Analizeaza grafic evolutiile studentilor, realizat pe baza
                    notelor obtinute!
                  </p>
                  <input id="elevGrafic" placeholder="Numele elevului" />
                  <form class="search" id="ckBoxm">
                    <div>
                      <label
                        ><input
                          @change="setValue(1)"
                          type="radio"
                          name="searchOption"
                        />
                        Materia 1</label
                      >
                    </div>
                    <div>
                      <label
                        ><input
                          @change="setValue(2)"
                          type="radio"
                          name="searchOption"
                        />
                        Materia 2</label
                      >
                    </div>
                    <div>
                      <label
                        ><input
                          @change="setValue(3)"
                          type="radio"
                          name="searchOption"
                        />
                        Materia 3</label
                      >
                    </div>
                  </form>

                  <button
                    @click="doo"
                    type="button"
                    class="btn btn-dark"
                    style="padding-left: 2px"
                  >
                    Submit
                  </button>
                </div>
              </div>
              
              <div class="card m-2" style="width: 25rem;">
                <div v-if="nonSummary" class="card-body">
                  <h5 class="card-title">Analitice</h5>
                  <h6 class="card-subtitle mb-2 text-muted">...</h6>
                  <p class="card-text">
                    Analizeaza grafic evolutiile studentilor, realizat pe baza
                    notelor obtinute!
                  </p>
                </div>
                <div v-if="summary" class="card-body">
                  <h5 class="card-title">Analitice</h5>
                  <h6 class="card-subtitle mb-2 text-muted">...</h6>
                  <div class="card-text">
                    Rezultate :
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Nume</th>
                          <th scope="col">Medie</th>
                          <th scope="col">Cea mai frecventa</th>
                        </tr>
                      </thead>
                      <tbody class="table-group-divider">
                        <tr>
                          <td>{{ data.nume_si_prenume }}</td>
                          <td>{{ medie }}</td>
                          <td>{{ mod }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <button
                    @click="refresh"
                    type="button"
                    class="btn btn-dark"
                    style="padding-left: 2px"
                  >
                    Refresh
                  </button>
                </div>
              </div>
            </div>
            
              <div class="card m-2" style="width: 51rem">
                <div class="card-body">
                  
                  <div v-if="deft">
                    <h5 class="card-title">Vezi toti studentii</h5>
                    <h6 class="card-subtitle mb-2 text-muted">...</h6>
                    <h2 class="card-text">
                      Vor fi afisate date partiale pentru toti studentii
                      inregistrati in Firebase
                    </h2>
                    <div>
                      
                    </div>
                  </div>
                  
                  <canvas id="myChart" style="width: 90%;"></canvas>
                  
                </div>

                
              </div>
            
            <div> 
              <h4> </h4>
            </div>

            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Final -->
  </div>
</template>
<script>
import Chart from "chart.js/auto";

export default {
  name: "AnaliticeNote",
  data() {
    return {
      groupVal: 0,
      medie: null,
      mod: null,
      data: [],
      materie: [],
      index_vector: 0,
      summary: false,
      nonSummary: true,
      deft: true,
      myChart1: null,
      full_data: null,
    };
  },
  mounted() {
    console.log("Canvas ready:", document.getElementById("myChart"));
    this.hist(this.groupVal); // Creează graficul atunci când componenta este montată
  },

  methods: {
    setGroup() {
      let inpHist = document.getElementById("inpHist");
      let aux = inpHist.value;
      aux = parseInt(aux, 10);
      if (isNaN(aux) || aux > 5 || aux < 0) {
        alert("Grupa trebuie sa fie un numar de la 1 la 5");
      } else {
        this.groupVal = aux;
        console.log("Aicic");
        this.hist(this.groupVal);
      }
    },
    refresh() {
      setTimeout(() => {
        location.reload();
      }, 1000);
    },
    mean(vector) {
      let mean = 0;
      let l = vector.length;
      //l este lung elem non nule
      for (let i = 0; i < vector.length; i++) {
        if (vector[i] == null) {
          l -= 1;
        } else {
          mean += vector[i];
        }
      }
      console.log(`MEan ${mean}`);
      return mean / l;
    },

    mostFreq(vector) {
      if (vector.length === 0) return null; // Dacă lista e goală, nu există modă

      const frecvente = {}; // Obiect pentru a număra frecvențele
      let maxFrecventa = 0;
      let mode = null;

      for (const num of vector) {
        if (num == null) {
          continue;
        }
        frecvente[num] = (frecvente[num] || 0) + 1; // Crește contorul pentru fiecare număr

        // Actualizează moda dacă frecvența curentă este cea mai mare
        if (frecvente[num] > maxFrecventa) {
          maxFrecventa = frecvente[num];
          mode = num;
        }
      }

      return mode;
    },

    setValue(newValue) {
      this.index_vector = newValue;
    },
    async doo() {
      alert(
        `Se poate verifica sectiunea de statistici descriptive pentru materia ${this.index_vector} `
      );
      let elev = document.getElementById("elevGrafic");

      console.log(elev.value);

      await this.take_data(elev.value, this.index_vector);
    },

    async take_data(stringElev, materie) {
      if (materie == 0) {
        alert("Trebuie bifata o casuta");
        return;
      }
      fetch("http://localhost:3000/data")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const rez = response.json();

          return rez;
        })
        .then((data) => {
          this.full_data = data;

          console.log(this.data);
          console.log("++++++++++++++=");

          var checker = false;

          for (let i = 0; i < this.full_data.length; i++) {
            console.log("Loop");
            if (stringElev == data[i].nume_si_prenume) {
              checker = true;
              this.summary = true;
              this.nonSummary = false;
              this.data = data[i];
              console.log(this.data.note);
              if (materie == 1) {
                this.materie = this.data.note.materia_1;
              }
              if (materie == 2) {
                this.materie = this.data.note.materia_2;
              }
              if (materie == 3) {
                this.materie = this.data.note.materia_3;
              }

              console.log(this.materie);

              console.log("Se afiseaza elev");
              console.log(`DATE RAMASE : ${this.data}`);
              this.medie = this.mean(this.materie);
              this.mod = this.mostFreq(this.materie);
              console.log(this.medie);

              this.chart();

              break;
            }
          }
          if (checker == false) {
            this.summary = false;
            this.nonSummary = true;
            this.deft = true;
            this.materie = [];
            alert("This name is not found");
          }
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    },

    chart() {
      this.deft = false;
      console.log(this.materie);
      alert("Chartul se afla in partea de jos a ecranului!");

      if (this.myChart1) {
        console.log("Destroy chart");
        this.myChart1.destroy();
        this.myChart1 = null;
        this.Hist = null;
      }
      const ctx = document.getElementById("myChart").getContext("2d");
      let labels = [];
      for (let i = 0; i < this.materie.length; i++) {
        labels[i] = i + 1;
      }

      this.myChart1 = new Chart(ctx, {
        type: "line", // tipul graficului
        data: {
          labels: labels, // etichetele de pe axa X
          datasets: [
            {
              label: "Evolutia notelor", // Titlul dataset-ului
              data: this.materie, // datele pentru axa Y
              borderColor: "rgba(75, 192, 192, 1)", // culoarea liniei
              fill: false, // nu se umple sub linie
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true, // începe de la 0 pe axa Y
            },
          },
        },
      });
    },
    hist(group) {
      console.log("Hist");
      console.log(group);

      fetch("http://localhost:3000/data")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const rez = response.json();

          return rez;
        })
        .then((data) => {
          if (this.Hist) {
            console.log("Destroy chart");
            this.Hist.destroy();
            this.Hist = null;
          }
          var vector = [];

          if (group == 0) {
            this.full_data = data;
            for (let i = 0; i < this.full_data.length; i++) {
              vector = vector.concat(this.full_data[i].note.materia_1);
              vector = vector.concat(this.full_data[i].note.materia_2);
              vector = vector.concat(this.full_data[i].note.materia_3);
            }
          } else {
            for (let i = 0; i < data.length; i++) {
              
              if (data[i].grupa == group) {
                vector = vector.concat(data[i].note.materia_1);
                vector = vector.concat(data[i].note.materia_2);
                vector = vector.concat(data[i].note.materia_3);
              }
            }
          }
          
          let counter = {}
          for (const elem of vector){
            console.log(elem)
            if (elem == null){
              continue
            }else{
              counter[elem] =  (counter[elem] || 0) + 1; 

            }
          }
          console.log(counter)
          console.log(`Frecvente : ${Object.values(counter)}`)

          // Obține contextul canvas-ului
          const ctx = document.getElementById("hist").getContext("2d");

          // Creează o histograma
          this.Hist = new Chart(ctx, {
            type: "bar", // Schimbă tipul la 'bar' pentru histogramă
            data: {
              labels: Object.keys(counter), // Etichetele pe axa X (ex: lunile)
              datasets: [
                {
                  label: "Distribuția notelor", // Titlul pentru histogramă
                  data: Object.values(counter), // Datele pentru axa Y (poți să le schimbi cu datele reale)
                  backgroundColor: "rgba(75, 192, 192, 0.6)", // Culoarea barelor
                  borderColor: "rgba(75, 192, 192, 1)", // Culoarea marginilor barelor
                  borderWidth: 1, // Grosimea marginilor
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                x: {
                  beginAtZero: true, // începe de la 0 pe axa X
                },
                y: {
                  beginAtZero: true, // începe de la 0 pe axa Y
                },
              },
              plugins: {
                legend: {
                  position: "top", // Plasează legenda în partea de sus
                },
              },
            },
          });
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });

      
    },
  },
};
</script>
