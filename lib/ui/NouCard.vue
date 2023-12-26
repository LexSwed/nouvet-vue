<script setup lang="ts">
import { type NuxtLinkProps } from "nuxt/app";
import { tw } from "./tw";

const props = defineProps</* @vue-ignore */NuxtLinkProps & { class?: string }>();
</script>

<template>
  <NuxtLink v-bind="props" :class="tw(
    'text-on-muted bg-muted/50 hover:bg-muted/70 focus:bg-muted/70 rounded-xl px-4 py-3 transition-colors',
    props.class,
  )
    ">
    <slot />
  </NuxtLink>
</template>
