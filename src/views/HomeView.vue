<script setup>
import PlayersList from "../components/PlayersList.vue";
import { usePlayersStore } from "../stores/players.js";
import { useSearchStore } from "./../stores/search.js";
import { computed } from "vue";
import LayoutView from "./LayoutView.vue";
import { normalize } from "../utils/strings";
const playersStore = usePlayersStore();
const searchStore = useSearchStore();

const filterPlayer = ({ name, backstory, perks_names }) => {
  return (
    normalize(name + backstory + perks_names.join(",")).indexOf(
      searchStore.searchNormalized
    ) >= 0
  );
};

const survivors = computed(() => playersStore.survivors.filter(filterPlayer));
const killers = computed(() => playersStore.killers.filter(filterPlayer));
</script>

<template>
  <LayoutView>
    <PlayersList title="Survivors" :players="survivors" variant="survivor" />
    <PlayersList title="Killers" :players="killers" variant="killer" />
  </LayoutView>
</template>

<style scope>
.top_search input {
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1.8rem;
  margin: 1rem 0;
  background-color: rgb(77, 52, 22);
  border: none;
  outline: none;
  color: rgb(201, 151, 58);
  border-radius: 0.5rem;
}
.top_search input::placeholder {
  color: rgb(201, 151, 58);
  opacity: 0.25;
}
</style>
