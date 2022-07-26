<script setup>
import PlayersList from "../components/PlayersList.vue";
import { usePlayersStore } from "../stores/players";
import { computed, ref, watch } from "vue";
import deburr from "lodash/deburr";

const playersStore = usePlayersStore();

const normalize = (value) => deburr(value).toLowerCase();

const filterPlayer = ({ name, backstory, perks_names }) => {
  return (
    normalize(name + backstory + perks_names.join(",")).indexOf(
      searchNormalized.value
    ) >= 0
  );
};

const survivors = computed(() => playersStore.survivors.filter(filterPlayer));
const killers = computed(() => playersStore.killers.filter(filterPlayer));

const search = ref(null);
const searchNormalized = computed(() => normalize(search.value));
</script>

<template>
  <main class="container">
    <div class="top_search">
      <input type="search" role="search" placeholder="Type to search..." v-model="search" />
    </div>
    <PlayersList title="Survivors" :players="survivors" variant="survivor" />
    <PlayersList title="Killers" :players="killers" variant="killer" />
  </main>
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