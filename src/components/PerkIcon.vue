<script setup>
import { computed } from "vue";
import find from "lodash/find";
import get from "lodash/get";
import { usePerksStore } from "@/stores/perks";

const perks = usePerksStore();

const props = defineProps({
  perkId: {
    type: Number,
    required: true,
  },
  variant: {
    type: String,
    default: "survivor",
    validate: (value) => ["survivor", "killer"].contains(value),
  },
});

const perk = computed(() => find(perks[props.variant], { id: props.perkId }));
const perkDescription = computed(() => get(perk, "value.description", null));
const perkName = computed(() => get(perk, "value.name"));
const perkTitle = computed(() => `${perkName.value}\n${perkDescription.value}`);
const perkIcon = computed(() =>
  get(perk, "value.icon", get(perk, "value.powerImags.0"))
);
</script>

<template>
  <div class="perk" :class="['perk--' + variant]" :title="perkTitle">
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
