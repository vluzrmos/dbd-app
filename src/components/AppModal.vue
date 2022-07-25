<template>
  <Teleport to="body">
    <div ref="modalEl" class="modal" :class="{ 'modal--show': show }">
      <div class="modal__backdrop" @click="closeModal"></div>
      <div class="modal__body">
        <button
          class="modal__close"
          type="button"
          title="Click to close"
          @click.prevent="$emit('close')"
          v-html="closeButtonHtml"
        ></button>
        <slot v-bind="slotProps" />
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, watchEffect, computed, onMounted } from "vue";

const props = defineProps({ show: Boolean });
const emits = defineEmits(["show", "close"]);

const showModal = () => {
  emits("show");
};

const closeModal = () => {
  emits("close");
};

const modalEl = ref(null);

const closeButtonHtml = "&Chi;";

const closeOnEsc = (e) => {
  console.log(e);
  if (
    props.show &&
    e.key === "Escape" &&
    e.ctrlKey === false &&
    e.altKey === false &&
    e.shiftKey === false
  ) {
    closeModal();
  }
};

watchEffect(() => {
  if (!modalEl.value) {
    return;
  }

  if (props.show) {
    document.body.style.overflow = "hidden";
    document.addEventListener("keyup", closeOnEsc);
  } else {
    document.body.style.overflow = "auto";
    document.removeEventListener("keyup", closeOnEsc);
  }
});

const slotProps = computed(() => ({ show: props.show, showModal, closeModal }));

onMounted(() => {});
</script>

<style>
.modal.modal--show {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
}

.modal--show > .modal__backdrop {
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  z-index: 1;
  cursor: pointer;
}

.modal:not(.modal--show) .modal__body,
.modal:not(.modal--show) .modal__body * {
  display: none !important;
}

.modal--show > .modal__body {
  max-width: 80vw;
  height: auto;
  min-height: 40vh;
  max-height: 90vh;
  z-index: 2;
  overflow: auto;
  display: flex;
  flex-direction: column;
}

.modal__close {
  position: fixed;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  padding: 1rem;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  z-index: 3;
  aspect-ratio: 1;
  color: rgb(242, 162, 12);
}

.modal__close:hover {
  background-color: rgb(97, 71, 40);
}
</style>
