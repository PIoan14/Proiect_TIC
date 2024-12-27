<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Lista Elevilor</a>
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
        <div class="col-md-2 col-sm-2 text-center"></div>
        <div class="main-content col-md-8 col-sm-8">
          <div class="BigTitle">Carduri pentru optiuni</div>
          <div class="row">
          <div v-for="(item, index) in items" :key="index"  class="card m-2" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">Card {{ index +1 }}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">
                Card subtitle
              </h6>
              <p class="card-text">
                Id elev este : {{ data[index] }}
              </p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
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
export default {
  name: "TotiElevii",
  setup() {},
  data(){
    
    
    return{ items :1,
      data : []
    } 
  },
  mounted() {
    this.take_data();
    console.log("Hop")
   
  },
  methods: {
    async take_data() {
      fetch("http://localhost:3000/data")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const rez = response.json()
          
          
          return rez;
        })
        .then((data) => {
          console.log(data[0].nume_si_prenume);
          this.items = data.length
          this.data = data
          console.log(data)
          console.log(this.data)
         
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
          this.items = 0
        });
    },
   

    
  },
};
</script>
