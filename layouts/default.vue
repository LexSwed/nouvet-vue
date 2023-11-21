<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useHead } from "#imports";
import { useLocaleHead } from "#i18n";
import type { RouteMeta } from "vue-router";

const route = useRoute();
const { t } = useI18n();
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});
const title = computed(() =>
  t("layouts.title", {
    title: t((route.meta as RouteMeta & { title?: string }).title || "TBD"),
  }),
);

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
  <div>
    <Html :lang="head.htmlAttrs?.lang" :dir="head.htmlAttrs?.dir">
      <Head>
        <Title>{{ title }}</Title>
        <template v-for="link in head.link" :key="link.id">
          <Link
            :id="link.id"
            :rel="link.rel"
            :href="link.href"
            :hreflang="link.hreflang"
          />
        </template>
        <template v-for="meta in head.meta" :key="meta.id">
          <Meta
            :id="meta.id"
            :property="meta.property"
            :content="meta.content"
          />
        </template>
      </Head>

      <Body>
        <slot />
      </Body>
    </Html>
  </div>
</template>
