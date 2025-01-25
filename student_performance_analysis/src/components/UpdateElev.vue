<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Modificari</a>
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
              <h3>Operatie de:</h3>
              <form class="search" id="ckForm">
                <div>
                  <label
                    ><input
                      @change="modUpdate"
                      type="radio"
                      name="searchOption"
                      value="id_elev"
                    />
                    Update</label
                  >
                </div>
                <div>
                  <label
                    ><input
                      @change="modStergere"
                      type="radio"
                      name="searchOption"
                      value="nume_si_prenume"
                    />
                    Stergere student</label
                  >
                </div>
                <div>
                  <label
                    ><input
                      @change="modStergeretotala"
                      type="radio"
                      name="searchOption"
                      value="nume_si_prenume"
                    />
                    Sterge toti studentii</label
                  >
                </div>
              </form>
              <div></div>
            </div>
            <div v-if="stergere" class="card" style="width: 20rem">
              <p class="card-text">
                Scrie ID-ul studentului pe care il vei sterge
              </p>
              <div>
                <label
                  ><input
                    @change="functieStergere"
                    type="radio"
                    name="searchOption"
                    value="email"
                  />
                  Bifati ca sa puteti sterge</label
                >
              </div>
            </div>
            <div v-if="stergereTotala" class="card" style="width: 20rem">
              <h4>Scrie in chenarul de mai jos cuvantul "stergere", iar apoi apasa submit</h4>
              <input id="inputStergere" placeholder="...">
              <button @click="purge" >Submit</button>
            </div>
            <div v-if="update" class="card" style="width: 20rem">
              <h3>Alege element de schimbat:</h3>
              <form class="search" id="optiuni">
                
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
                  <label for="nota"></label>
                  <input
                    placeholder="Index nota"
                    type="number"
                    id="nota-index"
                    name="nota"
                  />

                  <label for="nota"></label>
                  <input
                    placeholder="Materia 1,2 sau 3"
                    type="number"
                    id="materie"
                    name="n"
                  />
                 
                </div>
              </form>
              <div></div>
            </div>
            <div v-if="stergere" class="card" style="width: 20rem">
              <div class="card-body">
                <h5 class="card-title">Aplica Modificari</h5>
                <h6 class="card-subtitle mb-2 text-muted">...</h6>
                <div style="padding-bottom: 2px">
                  <label for="searchInput">ID student :</label>
                  <input id="idStergere" type="text" disabled />

                  <div style="padding-top: 10px">
                    <button
                      id="Buton Delete"
                      type="button"
                      class="btn btn-info"
                    >
                      Commit
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="update" class="card" style="width: 20rem">
              <div class="card-body">
                <h5 class="card-title">Aplica Modificari</h5>
                <h6 class="card-subtitle mb-2 text-muted">...</h6>
                <div style="padding-bottom: 2px">
                  <label for="searchInput">ID student :</label>
                  <input id="key-id" type="text" disabled />
                  <label for="searchInput">Valoare noua:</label>
                  <input id="key" type="text" disabled />

                  <div style="padding-top: 10px">
                    <button id="s_btn" type="button" class="btn btn-info">
                      Commit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 col-sm-2 text-center"></div>
          <div class="col-md-9 col-sm-9 text-center">
            <div class="row"></div>
          </div>
        </div>

        <div class="col-md-2 col-sm-2 text-center"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { update, deleteElev,addMark,purge } from "./actions.js";
export default {
  name: "UpdateElev",
  setup() {},
  data() {
    return {
      index_nota: null,
      materie: null,
      stergere: false,
      stergereTotala : false,
      update: true,
      value: "",
      key: "",
      bifat: false,
      de_afisat: [],
      tabel: false,
      id: "",
    };
  },
  methods: {
    refresh() {
      setTimeout(() => {
        location.reload();
      }, 3000)
    },
    modStergere() {
      this.stergere = true;
      this.update = false;
      this.stergereTotala = false
    },
    modUpdate() {
      this.stergere = false;
      this.update = true;
      this.stergereTotala = false
    },
    modStergeretotala(){
      this.stergere = false;
      this.update = false;
      this.stergereTotala = true

      

    },
    purge(){
      const st = document.getElementById("inputStergere")

      console.log(st.value)

      if(st.value === 'stergere'){
        alert("toate observatiile din baza de date Firebase vor fi sterse")
        
        purge()
        this.refresh() 
      }else{
        alert("cuvant-cheie gresit")
      }

    },
    async switchnota() {
      this.bifat = true;
      document.getElementById("key").disabled = false;
      document.getElementById("key-id").disabled = false;
      const button = document.getElementById("s_btn");

      button.addEventListener("click", () => {
        try {
          const index_nota_dom = document.getElementById("nota-index");
          this.index_nota = index_nota_dom.value;
          const materie_dom = document.getElementById("materie");
          this.materie = materie_dom.value;
          try {
            this.index_nota = Number(this.index_nota);
            this.materie = Number(this.materie);
            if (isNaN(this.materie | isNaN(this.index_nota))) {
              throw new Error(
                "In cadrul sectiunii de nota, inserati variabile numerice"
              );
            } else {
              this.materie = this.materie.toString();
            }
          } catch (error) {
            alert(error);
          }

          console.log(this.index_nota, this.materie);
          try {
            if ((this.materie > 3) | (this.materie < 1)) {
              throw new Error("Alege o materie de la 1 la 3");
            }

            let valoare = document.getElementById("key").value;
            let id = document.getElementById("key-id").value;

            if (isNaN(id)) {
              throw new Error("La schimbare de note se cere id numeric");
            }
            if (isNaN(valoare)) {
              throw new Error("Se cere ca nota adaugata sa fie un numar");
            }

            const materie_string = "materia_" + this.materie;
            console.log(materie_string);
            console.log(id, valoare, materie_string);
            valoare = Number(valoare)
            id = Number(id);
            
            addMark(id, this.index_nota, valoare, materie_string)
            alert("Nota adaugata cu succes!")
            this.refresh() 
            
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

      const checkList = document.getElementById("optiuni");
     

      checkList.addEventListener("change", (event) => {
        console.log(`Opțiune selectată: ${event.target.value}`);
        this.key = event.target.value;
        document.getElementById("key").disabled = false;
        document.getElementById("key-id").disabled = false;
      });
      const button = document.getElementById("s_btn");
      button.addEventListener("click", () => {
        this.value = document.getElementById("key").value;
        var test = 0
        if(this.key == 'email'){
          if(!this.value.includes("@") ){
            test = 1
            alert("Emailul trebuie sa contina @")


          }
          
        }
        if(this.key == 'nume_si_prenume'){
          if(this.value.length<5 ){
            test = 1
            alert("Structura de nume si prenume trebuie sa fie mai lunga de 5 caractere")

          }
          
        }
        this.id = document.getElementById("key-id").value;
        this.id = Number(this.id);

        this.key = this.key.toString();
        this.value = String(this.value);
        console.log(this.value + "");
        console.log("+++++++++++++++++");

        if(test == 0){
          try {
          update(this.id, this.value, this.key);
          
          alert("Update realizat cu succes !")
          this.refresh() 
         
        } catch (error) {
          alert(error);
        }
        }
      });
    },
    functieStergere() {
      try {
        document.getElementById("idStergere").disabled = false;
      } catch {
        alert("Insereaza un id valid pentru stergere");
      }
      const button = document.getElementById("Buton Delete");
      button.addEventListener("click", () => {
        this.id = Number(document.getElementById("idStergere").value);

        deleteElev(this.id);
        this.refresh()
       
      });
    },
  },
};
</script>
