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
  <div class="perk" :title="perkDescription">
    <img class="perk__icon" :src="perkIcon" :alt="perkName" />
  </div>
</template>
