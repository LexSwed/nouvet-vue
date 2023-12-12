<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";
import { tw } from "./tw";
import type { SVGAttributes } from "vue";

const iconVariants = cva("", {
  variants: {
    size: {
      font: "w-font h-font",
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
      xl: "w-7 h-7",
    },
  },
  defaultVariants: {
    size: "font",
  },
});

type IconVariants = VariantProps<typeof iconVariants>;

// type IconProps = IconVariants & /* @vue-ignore */ SVGAttributes &{
type IconProps = /* @vue-ignore */ SVGAttributes & {
  size: IconVariants['size'],
  name: string;
}

const props = defineProps<IconProps>();
</script>

<template>
  <svg-icon :name="props.name" :class="tw(iconVariants(props), props.class)" />
</template>
