<template>
    <div class ="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Instructiuni</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
       
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li><router-link class="r-link" to="/">Acasa</router-link></li>
            <li><router-link class="r-link" to="/AdaugaStudent">Adauga student</router-link></li>
            <li><router-link class="r-link" to="/Analitice">Analitice</router-link></li>
            <li><router-link class="r-link" to="/CautaStudent">Cauta elev</router-link></li>
            <li><router-link class="r-link" to="/InstructiuniAplicatie">Instructiuni</router-link></li>
            <li><router-link class="r-link" to="/SetariProfil">Setari Profil</router-link></li>
            <li><router-link class="r-link" to="/TotiElevii">Afiseaza toti Studentii</router-link></li>
            <li><router-link class="r-link" to="/UpdateElev">Modificari</router-link></li>
            <li><router-link class="r-link" to="/StergeCont">Stergere Cont</router-link></li>
            
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
</template>
<script>


export default ({
    name : "InstructiuniApp",
    setup() {
        
    },
})
</script>
