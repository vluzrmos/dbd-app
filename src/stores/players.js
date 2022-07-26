import { defineStore } from "pinia";
import survivors from "@/data/survivors";
import killers from "@/data/killers";

export const usePlayersStore = defineStore("players", {
  state: () => ({
    survivors,
    killers,
  }),
  actions: {},
});
