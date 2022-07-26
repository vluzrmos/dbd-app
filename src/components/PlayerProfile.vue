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

.player__profile {
    animation: fadeIn 200ms forwards;
    background-color: rgb(40, 35, 26);
}

.player__perks__list {
  display: flex;
  gap: 0.8rem;
  margin-top: 1rem;
}


.player__name {
    margin: 0;
    margin-bottom: 1rem;
    padding: 0;
    font-size: 1.75rem;
    font-weight: 800;
    color: rgb(242, 162, 12);
}

.player__backstory {
    padding: 0;
    text-align: justify;
    font-size: 1.25rem;
    color: rgb(194, 134, 24);
    font-weight: 600;
    letter-spacing: 1px;
}

.player__profile {
    width: 100%;
    height: 100%;
    padding: 1rem;
}

.modal__body .player__profile {
    border-radius: 5px;
}

.player__backstory p {
  margin-bottom: 1rem;
}

.player__profile {
    flex-direction: column;
    justify-content: center;
}

.player__profile .player__avatar {
    display: block;
    margin: 0 auto;
    margin-bottom: 1rem;
}

@media (min-width: 50rem) {
    .player__profile .player__avatar {
        float: left;
        width: 200px;
        margin-right: .5rem;
        margin-bottom: .5rem;
    }
}
</style>
