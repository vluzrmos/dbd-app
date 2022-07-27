import { defineStore } from "pinia";
import { strval, normalize } from "../utils/strings";

export const useSearchStore = defineStore("search", {
  state: () => ({
    search: null,
  }),
  getters: {
    searchNormalized: (state) => normalize(state.search),
  },
  actions: {
    /**
     *
     * @param {String|null} value
     */
    setSearch(value) {
      this.search = strval(value);
    },
    /**
     * @param {InputEvent} event
     */
    onInput(event) {
      this.setSearch(event.target.value);
    },
  },
});
