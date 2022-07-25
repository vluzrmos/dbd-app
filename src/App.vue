<script setup>
import { RouterLink, RouterView } from "vue-router";
import { routeTo } from "@/router";
</script>

<template>
  <header>
    <div class="container">
      <nav>
        <RouterLink :to="routeTo('home')">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>