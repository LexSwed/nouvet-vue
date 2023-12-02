<script setup lang="ts">
import { Link } from "#build/components";
import AButton from '@/components/ui/AButton.vue'
import ANavCard from '@/components/ui/ANavCard.vue'
</script>

<template>
  <NuxtLayout name="default">
    <div class="to-tertiary/5 min-h-full bg-gradient-to-br from-primary/5 pb-8 pt-4">
      <header class="container flex flex-col gap-4">
        <div class="flex flex-row items-center justify-between">
          <Link to="/" aria-label="{{$t('link-home')}}" title="{{$t('link-home')}}" class="-m-4 p-4">
          <img src="/icons/icon.svg" alt="" class="h-12 w-12">
          </Link>
          <AButton>
            <Link to="/family">
            {{ $t("open-family-app") }}
            </Link>
          </AButton>
        </div>
        <nav>
          <ul class="spacing-bleed flex snap-x snap-mandatory flex-row gap-2 overflow-x-auto scrollbar-none">
            <li class="shrink-0">
              <Link to="/#features">
              <ANavCard class="flex min-w-[8rem] flex-col place-items-start gap-2 font-medium">
                <Icon size="lg" icon="package" class="text-primary" />
                {{ $t("features") }}
              </ANavCard>
              </Link>
            </li>
            <li class="shrink-0">
              <Link to="/about">
              <ANavCard class="flex min-w-[8rem] flex-col place-items-start gap-2 font-medium">
                <Icon size="lg" icon="nouvet" class="text-primary" />
                {{ $t("link-about-the-project") }}
              </ANavCard>
              </Link>
            </li>
            <li class="shrink-0">
              <Link to="/privacy">
              <ANavCard class="flex min-w-[8rem] flex-col place-items-start gap-2 font-medium">
                <Icon size="lg" icon="scroll" class="text-primary" />
                {{ $t("link-privacy-policy") }}
              </ANavCard>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main class="container mt-8 flex flex-col gap-8">
        <slot />
      </main>
    </div>
  </NuxtLayout>
</template>
