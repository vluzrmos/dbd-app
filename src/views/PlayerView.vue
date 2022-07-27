<script>
export default {
  layout: HomeViewVue,
};
</script>
<script setup>
import { usePlayersStore } from "../stores/players";
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
import PlayerProfile from "../components/PlayerProfile.vue";
import find from "lodash/find";
import HomeViewVue from "./HomeView.vue";
import LayoutView from "./LayoutView.vue";

const currentRoute = useRoute();

const players = usePlayersStore();

const playerKiller = computed(() =>
  find(players.killers, { code: currentRoute.params.playerCode })
);
const playerSurvivor = computed(() =>
  find(players.survivors, { code: currentRoute.params.playerCode })
);

const player = computed(() => ({
  variant: playerKiller.value ? "killer" : "survivor",
  player: playerKiller.value || playerSurvivor.value,
}));
</script>
<template>
  <LayoutView v-bind="{ showSearch: false }">
    <div class="mb-2">
      <RouterLink class="btn btn--back" :to="{ name: 'home', params: { focusSearch: true } }">Back</RouterLink>
    </div>
    <PlayerProfile v-bind="player"></PlayerProfile>
  </LayoutView>
</template>

<style>
.btn.btn--back {
  appearance: none;
  text-decoration: none;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: rgb(77, 52, 22);
  padding: 0.5rem 1rem;
  display: inline-block;
  font-size: 1.8rem;
  color: rgb(201, 151, 58);
}

.mb-2 {
  margin-bottom: 2rem;
}
</style>
