import { defineStore } from "pinia";
import survivors from "@/data/survivors.json";
import killers from "@/data/killers.json";

export const usePlayersStore = defineStore("players", {
  state: () => ({
    survivors,
    killers,
  })
});
