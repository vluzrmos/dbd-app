<script setup>
import PlayerAvatar from "./PlayerAvatar.vue";
import PlayerProfile from "./PlayerProfile.vue";
import AppModal from "./AppModal.vue";
import { ref, computed } from "vue";
const props = defineProps({ title: String, variant: String, players: Array });
const player = ref(null);

const show = computed(() => player.value !== null);
</script>

<template>
  <div class="players">
    <h1 class="players__title">
      <span>{{props.title}}</span>
      
      <span
        class="players__count"
        :title="`Showing ${players.length} ${variant}s`"
      >({{ players.length }})</span>
    </h1>
    <div class="players__list">
      <PlayerAvatar
        v-for="item in players"
        :key="item.number"
        :player="item"
        @click="player = item"
      />
    </div>

    <div v-if="players.length === 0" class="players__not_found">No players found.</div>
  </div>

  <AppModal :show="show" @close="player = null">
    <PlayerProfile v-if="player" v-bind="{player}" :variant="variant"></PlayerProfile>
  </AppModal>
</template>

<style scoped>
.players__title {
  color: rgb(242, 162, 12);
  /* rgb(207 158 9); */
  font-weight: 600;
}
.players__count {
  margin-left: 0.5rem;
  opacity: 0.5;
  font-size: 0.5em;
  vertical-align: super;
}
.players__list {
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: start;
  overflow: auto;
  padding: 0.5rem;
}

.players__list .player {
  position: relative;
  cursor: pointer;
}

.players__list .player__avatar {
  width: calc(100vw * 0.8);
  transition: transform 75ms ease, background-color 200ms ease;
  will-change: transform, background-color;
}

.players + .players {
  margin-top: 1rem;
}

@media (min-width: 50rem) {
  .players__list .player__avatar {
    width: calc(100vw / 6 - 1rem);
  }
}

/* ===== Scrollbar CSS ===== */
/* Firefox */
.players__list {
  --scrollbar-color: transparent;
  scrollbar-width: auto;
  scrollbar-color: var(--scrollbar-color) transparent;
}

/* Chrome, Edge, and Safari */
.players__list::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

.players__list::-webkit-scrollbar-track {
  background: transparent;
}

.players__list::-webkit-scrollbar-thumb {
  transition: all 1s ease;
  background-color: var(--scrollbar-color);
  border-radius: 10px;
}

.players__list:hover {
  --scrollbar-color: #5a575b;
}

.players__not_found {
  color: #484848;
}
</style>
