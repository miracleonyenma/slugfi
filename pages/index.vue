<script setup lang="ts">
import SlugGeneratorForm from "@/components/SlugGeneratorForm.vue";
import gradientImg from "@/assets/img/hero@75.b2469a49.jpg";
import box from "@/assets/img/box.svg";

const bgImg = `url(${gradientImg})`;
const boxImg = `url(${box})`;
</script>
<template>
  <header class="site-hero site-section">
    <div class="site-hero__bg">
      <div class="site-hero__bg-inner"></div>
    </div>
    <div class="wrapper">
      <div class="site-hero__text-content">
        <h1 class="site-hero__caption">
          Generate URL friendly slugs with Slugfi
        </h1>
        <p class="site-hero__description">
          Slugfi is a free tool that helps you generate URL friendly slugs for
          your blog posts, articles, and other content.
        </p>
      </div>

      <SlugGeneratorForm class="site-hero__form" />
    </div>
  </header>
</template>
<style scoped>
.site-hero {
  @apply md:py-32;
}
.site-hero__bg {
  @apply fixed top-0 left-0 w-full min-h-screen h-full -z-10;
  @apply bg-bottom bg-cover bg-no-repeat;
  background-image: v-bind(bgImg);
}

.site-hero__bg-inner {
  @apply absolute inset-0 bg-slate-900/[0.04] bg-[bottom_1px_center];
  mask-image: linear-gradient(to bottom, transparent, black);
  background-image: v-bind(boxImg);
}

.site-hero > .wrapper {
  @apply grid  lg:grid-cols-11 justify-center items-center gap-4 md:gap-8 max-w-7xl;
}

.site-hero__text-content {
  @apply lg:col-span-5 flex flex-col items-center md:items-start gap-4 text-center lg:text-left max-w-4xl;
}

.site-hero__caption {
  @apply font-extrabold text-5xl lg:text-6xl;
}

.site-hero__description {
  @apply text-lg lg:text-xl;
}

.site-hero__form {
  @apply lg:col-span-6;
}
</style>
