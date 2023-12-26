<script lang="ts">
import type { AnchorHTMLAttributes } from 'vue';
import { buttonVariants, type ButtonVariants } from './NouButton.vue';
import { tw } from './tw';
import type { NuxtLinkProps } from 'nuxt/app';

interface AnchorProps extends /* @vue-ignore */ButtonVariants, /* @vue-ignore */NuxtLinkProps {
  class?: AnchorHTMLAttributes['class'];
}
</script>

<script setup lang="ts">
const props = defineProps<AnchorProps>();
</script>

<template>
  <NuxtLink v-bind="props" :class="tw(buttonVariants(props), props.class)">
    <slot />
  </NuxtLink>
</template>