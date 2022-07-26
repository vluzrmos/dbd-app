import { defineStore } from "pinia";
import survivor from "@/data/survivorPerks.json";
import killer from "@/data/killerPerks.json";

export const usePerksStore = defineStore("perks", {
  state: () => ({
    survivor,
    killer,
  })
});
