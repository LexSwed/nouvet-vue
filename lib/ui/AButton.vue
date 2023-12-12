<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";
import { type ButtonHTMLAttributes } from "vue";
import { tw } from "./tw";

const buttonVariants = cva(
  "ring-offset-background focus-visible:ring-outline inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-on-primary hover:bg-primary/90 focus-visible:ring-primary",
        destructive:
          "bg-destructive text-on-destructive hover:bg-destructive/90",
        outline:
          "border-input bg-background hover:bg-accent hover:text-on-accent border",
        secondary: "bg-secondary text-on-secondary hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-on-accent",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-4 py-2 text-base",
        sm: "h-10 rounded-md px-3 text-base",
        lg: "h-14 rounded-md px-8 text-lg",
        cta: "h-16 rounded-full px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

const props = withDefaults(
  defineProps<ButtonHTMLAttributes & ButtonVariants>(),
  {
    type: "button",
  },
);
</script>

<template>
  <button v-bind="props" :class="tw(buttonVariants(props))">
    <slot />
  </button>
</template>
