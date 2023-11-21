<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const langs = ref([
  { key: "en-UK", label: "English" },
  { key: "es-ES", label: "Español" },
]);
</script>

<template>
  <div>
    <form>
      <select v-model="locale">
        <option v-for="lang in langs" :key="lang.key">
          {{ lang.label }}
        </option>
      </select>
      <p>{{ $t("www.headline") }}</p>
    </form>
  </div>
</template>
