<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <NuxtLink tag="a" class="navbar-brand" to="/">NuxtJS Lesson 02</NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <NuxtLink tag="a" class="nav-link" to="/">AnaSayfa</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink tag="a" class="nav-link" to="/hakkimizda">Hakkımızda</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink tag="a" class="nav-link" to="/iletisim">İletişim</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
