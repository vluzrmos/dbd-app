<script setup>
import data from "@/data/survivors.json";
import PlayerSurvivor from "./PlayerSurvivor.vue";

console.log(data);
</script>

<template>
  <div class="survivors_list">
    <PlayerSurvivor v-for="item in data" :key="item.number" :survivor="item" />
  </div>
</template>
