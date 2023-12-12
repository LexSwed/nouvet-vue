<script setup lang="ts">
import { useLocaleHead, useHead } from '#imports';

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});

useHead({
  link: [
    { rel: "icon", href: "/icons/icon.svg", sizes: "32x32" },
    { rel: "apple-touch-icon", href: "/icons/icon.svg" },
    { rel: "icon", href: "/icons/icon-apple.png" },
    { rel: "manifest", href: "/manifest.webmanifest" },
  ],
});
</script>

<template>
  <Html :lang="head.htmlAttrs?.lang" :dir="head.htmlAttrs?.dir">

  <Head>
    <template v-for="link in head.link" :key="link.id">
      <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
    </template>
    <template v-for="meta in head.meta" :key="meta.id">
      <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
    </template>
  </Head>

  <Body>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </Body>

  </Html>
</template>
