<script lang="ts">
import { cva, type VariantProps } from "class-variance-authority";
import { type ButtonHTMLAttributes } from "vue";
import { tw } from "./tw";

export const buttonVariants = cva(
  'relative ring-offset-background focus-visible:ring-outline inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-on-primary intent:bg-primary/90 focus-visible:ring-primary',
        destructive:
          'bg-destructive text-on-destructive intent:bg-destructive/90',
        outline:
          'border-input bg-background intent:bg-accent intent:text-on-accent border',
        secondary: 'bg-secondary text-on-secondary intent:bg-secondary/80',
        ghost: 'intent:bg-accent intent:text-on-accent',
        link: 'text-primary underline-offset-4 intent:underline',
      },
      size: {
        default: 'h-12 min-w-12 px-4 py-2 text-base',
        sm: 'h-10 min-w-10 rounded-md px-3 text-base',
        lg: 'h-14 min-w-14 rounded-md px-8 text-lg',
        cta: 'h-16 min-w-16 rounded-full px-8 text-lg',
      },
      loading: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
interface ButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes, /* @vue-ignore */ButtonVariants { }
</script>

<script setup lang="ts">

const { type, class: className, ...props } = withDefaults(
  defineProps<ButtonProps>(),
  {
    type: "button"
  },
);
</script>

<template>
  <button :type="type" :class="tw(buttonVariants(props), className)">
    <slot />
  </button>
</template>
