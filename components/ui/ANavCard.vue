<script setup lang="ts">
import { HTMLAttributes } from 'vue';
import { tw } from './tw';

const props = defineProps<HTMLAttributes>()
</script>

<template>
  <div
    :class="tw('text-on-muted rounded-xl bg-muted/50 px-4 py-3 transition-colors hover:bg-muted/70 focus:bg-muted/70', props.class)">
    <slot />
  </div>
</template>