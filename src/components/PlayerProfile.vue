<script setup>
import { computed } from "vue";
import PerkIcon from "./PerkIcon.vue";
import { linesToHtmlParagraphs } from "@/utils/strings.js";

const props = defineProps({ player: Object, variant: String });

const htmlBackstory = computed(() => linesToHtmlParagraphs(props.player.backstory));
</script>

<template>
  <div class="player__profile">
    <img class="player__avatar" loading="lazy" :src="player.imgs.portrait" alt="player picture" />

    <h1 class="player__name">{{ player.name }}</h1>
    <div class="player__backstory" v-html="htmlBackstory"></div>

    <div class="player__perks__list">
      <PerkIcon v-for="perkId in player.perks_ids" v-bind="{ perkId, variant }" :key="perkId" />
    </div>
  </div>
</template>

<style>
.player__perks__list {
  display: flex;
  gap: 0.8rem;
  margin-top: 1rem;
}

.player__backstory p {
  margin-bottom: 1rem;
}
</style>



