<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Setari</a>
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
                <li><router-link class="r-link" to="/">Acasa</router-link></li>
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
          <h1 class="BigTitle text-center">
            Schimba numele de utilizator sau parola
          </h1>
          <div class="row justify-content-center">
            <!-- Central vertical line -->
            <div class="col-md-2 d-flex flex-column align-items-center">
              <div class="card m-2" style="width: 20rem">
                <div class="card-body">
                  <h5 class="card-title">Nume nou de user :</h5>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <button type="button" class="btn btn-dark">Dark</button>

                </div>
              </div>
              <div class="card m-2" style="width: 20rem">
                <div class="card-body">
                  <h5 class="card-title">Parola Noua</h5>
                  <div class="input-group mb-3">
                    <span class="input-group-text">$</span>
                    <input
                      placeholder="Parola noua"
                      type="text"
                      class="form-control"
                      aria-label="Amount (to the nearest dollar)"
                    />
                    <span class="input-group-text"></span>
                  </div>
                  <button type="button" class="btn btn-info">Commit</button>
                </div>
              </div>
              <div class="card m-2" style="width: 20rem">
                <div class="card-body">
                  <h5 class="card-title">Status</h5>
                  <p class="card-text">Username actual : .</p>
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
  name: "SetariProfil",
  setup() {},
};
</script>
