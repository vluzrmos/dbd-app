<script setup>
import data from "@/data/survivors.json";
import PlayerSurvivor from "./PlayerSurvivor.vue";
import PerkIcon from "./PerkIcon.vue";
import PlayerProfile from "./PlayerProfile.vue";
import AppModal from "./AppModal.vue";
import { ref , computed } from "vue";

const player = ref(null);

const show = computed(() => player.value !== null)
</script>

<template>
  <div class="survivors_list">
    <PlayerSurvivor 
      v-for="item in data"
      :key="item.number"
      :survivor="item"
      @click="player = item"
    />
  </div>

  <AppModal :show="show" @close="player = null">
    <PlayerProfile v-if="player" v-bind="{player}" variant="survivor"></PlayerProfile>
  </AppModal>
</template>
