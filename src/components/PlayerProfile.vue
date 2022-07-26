<script setup>
import PerkIcon from "./PerkIcon.vue";
defineProps({ player: Object, variant: String });
</script>

<template>
  <div class="player__profile">
    <img class="player__avatar" loading="lazy" :src="player.imgs.portrait" alt="player picture" />

    <h1 class="player__name">{{ player.name }}</h1>
    <p class="player__backstory">{{ player.backstory }}</p>

    <div class="player__perks__list">
      <PerkIcon v-for="name in player.perks_names" v-bind="{ name, variant }" :key="name" />
    </div>
  </div>
</template>

<style scoped>
.player__perks__list {
  display: flex;
  gap: 0.8rem;
  margin-top: 1rem;
}
</style>



