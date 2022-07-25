<script setup>
defineEmits(["click"]);

defineProps({
  survivor: { type: Object },
});
</script>

<template>
  <div class="survivor">
    <img
      class="survivor__avatar"
      @click="$emit('click')"
      :src="survivor.imgs.portrait"
      alt="Survivor picture"
    />
  </div>
</template>
