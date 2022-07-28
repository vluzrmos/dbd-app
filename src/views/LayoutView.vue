<script setup>
import { useSearchStore } from "@/stores/search";
import { computed, onMounted, ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

defineProps({ showSearch: { type: Boolean, default: true } });

const searchStore = useSearchStore();

const onFocus = () => {
  if (currentRoute.name !== "home") {
    router.push({ name: "home", params: { focusSearch: true } });
  }
};

const searchInput = ref(null);
const searchBindings = computed(() => ({
  value: searchStore.search,
  onInput: searchStore.onInput,
  onFocus,
}));

const currentRoute = useRoute();
const router = useRouter();

watchEffect(() => {
  searchStore.setSearch(currentRoute.query.search);
});

const setSearchQueryOnKeyup = () => {
  if (currentRoute.query.search !== searchStore.search) {
    router.replace({ query: { search: searchStore.search } });
  }

  if (searchStore.search === "") {
    router.replace({ query: { search: undefined } });
  }
};

onMounted(() => {
  if (currentRoute.name === "home" && currentRoute.params.focusSearch)
    searchInput.value.focus();
});
</script>

<template>
  <nav v-if="showSearch" class="container">
    <form class="top_search" role="search" @submit.prevent aria-label="Sitewide">
      <input
        ref="searchInput"
        type="search"
        name="search"
        placeholder="Type to search..."
        aria-label="Type to search through survivors, killers, perks, and others things"
        v-bind="searchBindings"
        @keyup="setSearchQueryOnKeyup"
      />
    </form>
  </nav>
  <main class="container main-content">
    <slot />
  </main>
</template>

<style scope>
.top_search input {
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1.8rem;
  margin: 1rem 0;
  background-color: rgb(77, 52, 22);
  border: none;
  outline: none;
  color: rgb(201, 151, 58);
  border-radius: 0.5rem;
}
.top_search input::placeholder {
  color: rgb(201, 151, 58);
  opacity: 0.25;
}

main.main-content {
  margin-top: 1rem;
}
</style>
