<script setup lang="ts">
import { type NuxtLinkProps } from "nuxt/app";
import AIcon from './AIcon.vue';
import { tw } from "./tw";


const props = defineProps<{ label: string; class?: string; } & NuxtLinkProps>()

</script>

<template>
  <NuxtLink to="/" :aria-label="props.label" :title="props.label"
    :class="tw('flex flex-row items-center gap-4', props.class)">
    <AIcon name="nouvet" class="h-14 w-14" />
    <span class="hidden text-lg sm:inline-block">{{ props.label }}</span>
  </NuxtLink>
</template>