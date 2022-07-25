<script setup>
import { ref, computed, onMounted, watchEffect } from "vue";
import PerkIcon from "./PerkIcon.vue";

const props = defineProps({
  survivor: { type: Object },
});

const survivor = computed(() => props.survivor);

let show = ref(false);
const classList = computed(() => ({ show: show.value }));

const survivorEl = ref(null);

const clickAwayListener = (e) => {
  survivorEl.value.contains(e.target) ? open() : close();
};

watchEffect(() => {
  if (!survivorEl.value) {
    return;
  }

  if (show.value) {
    document.body.style.overflow = 'hidden';
    document.addEventListener("click", clickAwayListener);
  } else {
    document.body.style.overflow = 'auto';
    document.removeEventListener("click", clickAwayListener);
  }
});

const open = () => (show.value = true);
const close = () => (show.value = false);
</script>

<template>
  <div ref="survivorEl" class="survivor" :class="classList">
    <img
      class="survivor__avatar"
      @click="open"
      :src="survivor.imgs.portrait"
      alt="Survivor picture"
    />
    <div class="survivor__profile">
      <button
        class="survivor__close"
        type="button"
        title="Click to close profile"
        @click.prevent="close"
      >&Chi;</button>
      <img
        class="survivor__avatar"
        loading="lazy"
        :src="survivor.imgs.portrait"
        alt="Survivor picture"
      />

      <h1 class="survivor__name">{{ survivor.name }}</h1>
      <p class="survivor__backstory">{{ survivor.backstory }}</p>

      <div class="survivor__perks__list">
        <PerkIcon
          v-for="name in survivor.perks_names"
          v-bind="{ name, variant: 'survivor' }"
          :key="name"
        />
      </div>
    </div>
  </div>
</template>
