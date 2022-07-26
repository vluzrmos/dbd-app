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

    <div class="player__avatar__name">{{player.name}}</div>
  </div>
</template>

<style scoped>
.player__avatar__name {
  color: rgb(137, 97, 41);
  text-align: center;
}
</style>
