<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Instructiuni</a>
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
          <h1 class="BigTitle text-center">Instructiuni :</h1>
          <div class="row justify-content-center" style="padding-top: 50px">
            <!-- Central vertical line -->
            <div class="col-md-2 d-flex flex-column align-items-center">
              <div class="card m-2" style="width: 30rem">
                <div class="card-body">
                  <h5 class="card-title">Instructiuni</h5>
                  <h6 class="card-title">...</h6>
                  <p class="card-text" style="text-align: justify;">
                    Aplicatia are ca punct de origine pagina Home. De acolo se pot accesa toate paginile secundare (componente Vue), 
                    fieacre avand rol specific. Prin intermediul acestora, se pot face operatii de stergere, update, afisare, si analizare
                    grafica (doar pentru note) a studentilor inregistrati in aplicatie, urmand anumite indicatii prezente in fiecare structura.
                    De asemenea, pagina de status arata numele utilizatorului logat in aplicatie in faza curenta. 
                    Inainte de logare, in cazul in care nu sunteti inregistrat, introduceti un nume nou (email) si o parola mai lunga de 6 caractere
                    In cazul in care stergeti contul dvs. , o noua inregistrare este necesara pentru accesul in aplicatie.


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
export default {
  name: "InstructiuniApp",
  setup() {},
};
</script>
