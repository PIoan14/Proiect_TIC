<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Stergere Cont</a>
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
          <h1 class="BigTitle text-center">User curent :</h1>
          <div class="row justify-content-center" style="padding-top: 40px">
            <!-- Central vertical line -->
            <div class="col-md-2 d-flex flex-column align-items-center">
              <div class="card m-2" style="width: 20rem">
                <div class="card-body">
                  <h5 class="card-title">Stergere cont</h5>
                  <p class="card-text">
                    Pentru a sterge contul este necesara introducerea structurii "STERGECONT" si apasarea butonului de submit.
                  </p>
                  
                      <input
                        type="text"
                        class="form-control"
                        placeholder="....."
                        v-model="key"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        autocomplete="Username"
                        required
                      />
                  <div style="padding-top: 10%;"> 
                    <button @click="check" class="btn btn-primary">Submit</button>
                  </div>
                    
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
import { deleteUser , getAuth} from 'firebase/auth';

export default {
  name: "StergeCont",
  setup() {},

  data(){
    return{
      key: ""
    
    }
  },
  methods : {
    async check(){
      if(this.key == "STERGECONT"){

        try{
          const auth = getAuth()
          const user = auth.currentUser;
          
          await deleteUser(user);
          alert("Cont sters!")
          this.$router.push("/");

        }catch{

          alert("Ceva nu e bine")

        }

      }else{
        alert("Cheie invalida !")
      }
    }



  }
};
</script>
