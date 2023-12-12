<script setup lang="ts">
import { useI18n } from "vue-i18n";
import ANavCard from "~/lib/ui/ANavCard.vue";
import ALogoLink from '~/lib/ui/ALogoLink.vue'

const { t } = useI18n();

const items: Array<{ label: string; icon: string; href: string }> = [
  {
    href: "/#features",
    label: t("www.features")!,
    icon: "package",
  },
  {
    href: "/about",
    label: t("www.link-about-the-project")!,
    icon: "nouvet",
  },
  // {
  //   href: '/privacy',
  //   label: t('www.link-privacy-policy')!,
  //   icon: scrollIcon,
  // },
];
</script>

<template>
  <div class="min-h-full bg-main pb-8 pt-4">
    <header class="container flex flex-col gap-4">
      <div class="flex flex-row items-center">
        <ALogoLink :label="$t('common.app-name')" class="-m-4 p-4" />
      </div>
      <nav>
        <ul class="-mx-4 flex snap-x snap-mandatory flex-row gap-2 overflow-x-auto p-2 scrollbar-none sm:-mx-2">
          <li v-for="item in items" :key="item.href" class="shrink-0">
            <ANavCard :href="item.href" class="flex min-w-[8rem] flex-col place-items-start gap-2">
              <AIcon :icon="item.icon" size="lg" class="text-primary" />
              {{ item.label }}
            </ANavCard>
          </li>
        </ul>
      </nav>
    </header>
    <main class="container mt-8 flex flex-col gap-8">
      <slot />
    </main>
  </div>
</template>
