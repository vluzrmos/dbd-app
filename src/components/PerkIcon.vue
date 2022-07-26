<script setup>
import survivor from "@/data/survivorPerks.json";
import killer from "@/data/killerPerks.json";
import { computed } from "vue";

const perks = { survivor, killer };

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: "survivor",
    validate: (value) => ["survivor", "killer"].contains(value),
  },
});

const perk = computed(() =>
  perks[props.variant].find(({ name }) => name === props.name)
);

const perkDescription = computed(() =>
  perk.value ? perk.value.description : null
);

const perkIcon = computed(() => {
  if (!perk.value) {
    return null;
  }

  return perk.value.icon || perk.value.powerImgs[0];
});

const perkName = computed(() => (perk.value ? perk.value.name : null));
</script>

<template>
  <div class="perk" :class="['perk--' + variant]" :title="`${perkName}\n${perkDescription}`">
    <img class="perk__icon" :src="perkIcon" :alt="perkName" />
  </div>
</template>

<style scoped>
.perk {
  width: 4rem;
  height: 4rem;
  transition: box-shadow 150ms ease;
}

.perk__icon {
  opacity: 0.5;
  transition: opacity 150ms ease;
}

.perk:hover .perk__icon {
  opacity: 1;
}

.perk:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
}

.perk--killer {
  background-color: rgb(118, 53, 21);
}

.perk--survivor {
  background-color: rgb(89, 25, 109);
}

.perk__icon {
  width: 100%;
  aspect-ratio: 1;
}
</style>