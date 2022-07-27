<script setup>
defineEmits(["click"]);

defineProps({
  player: { type: Object },
});
</script>

<template>
  <div class="player" @click="$emit('click')">
    <img
      class="player__avatar"
      :src="player.imgs.portrait"
      alt="Player picture"
    />

    <div class="player__avatar__name">{{ player.name }}</div>
  </div>
</template>

<style scoped>
.player > .player__avatar:hover {
  /* transform: scale(1.05, 1.05); */

  animation: scale__avatar 75ms forwards;
}

.player__avatar__name {
  color: rgb(216, 144, 44);
  text-align: center;
}
</style>
