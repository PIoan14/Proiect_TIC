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
        <div class="col-md-3 col-sm-3 text-center">
          <div>
            <p
              style="
                padding-top: 150px;
                padding-right: 50px;
                font-family: Ink Free;
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
        <div class="main-content col-md-9 col-sm-9">
          <div class="BigTitle">Carduri asociate elevilor</div>
          <div class="row">
            <div
              v-for="(item, index) in data"
              :key="index"
              class="card m-2"
              style="width: 22rem"
            >
              <div class="card-body">
                <h5 class="card-title">Card {{ index + 1 }}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                  {{ item.nume_si_prenume }}
                </h6>
                <table class="table">
                  <thead> 
                    <tr> 
                      <th scope="col1"> ID</th>
                      <th scope="col1"> Email</th>
                      <th scope="col1"> Grupa</th>
                    </tr>
                  </thead>
                  <tbody class="table-group-divider">
                        <tr>
                          <td>{{item.id_elev }}</td>
                          <td>{{item.email }}</td>
                          
                          <td>{{item.grupa }}</td>
                        </tr>
                      </tbody>
                </table>
               
              </div>
            </div>
            <div v-if="empty">
              <p class="card-text">
                Momentan nu exista studenti inregistrati! Adaugati studenti in
                baza de date! Acestia vor fi afisati aici ;]]]] !
              </p>
            </div>
            <div v-if="empty" class="books_div">
              <span class="books">&#128393;</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TotiElevii",
  setup() {},
  data() {
    return {
      data: [],
      empty: false,
    };
  },
  mounted() {
    this.take_data();
    console.log("Hop");
  },
  methods: {
    async take_data() {
      fetch("http://localhost:3000/data")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const rez = response.json();

          return rez;
        })
        .then((data) => {
          console.log(data[0].nume_si_prenume);

          this.data = data;

          console.log(this.data);
          console.log("++++++++++++++=");

          console.log(this.data.length);
          this.data = JSON.parse(JSON.stringify(this.data));
        })
        .catch((error) => {
          this.empty = true;
          console.error("There was a problem with the fetch operation:", error);
        });
    },
  },
};
</script>
