<script setup lang="ts">
import { definePageMeta } from '#imports';
import NouButton from '~/lib/ui/NouButton.vue';
import NouLink from '~/lib/ui/NouLink.vue';
import NouIcon from '../lib/ui/NouIcon.vue';

definePageMeta({
  layout: 'www'
})
</script>

<template>
  <div>
    <NouIcon use="nouvet" />
    <i18n-t keypath="www.headline">
      <br>
    </i18n-t>
    <NouButton>Click Me</NouButton>
    <NouLink to="/hello" variant="link">Hello</NouLink>
  </div>
</template>
