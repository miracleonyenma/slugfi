<template>
  <header class="site-header">
    <div class="wrapper">
      <NuxtLink to="/">
        <figure class="site-logo">
          <div class="wrapper">
            <div class="site-logo__img-cont img-cont">
              <img src="/assets/icons/icon-512x512.png" alt="Site Logo" />
            </div>
            <span class="site-logo__text"> Slugfi </span>
          </div>
        </figure>
      </NuxtLink>
    </div>
  </header>
</template>
<style scoped>
.site-header {
  @apply sticky top-0 p-4 z-10;
}

.site-header > .wrapper {
  @apply flex items-center justify-between p-4 w-fit bg-white/60 border border-white/80 rounded-full shadow-xl shadow-slate-900/10;
  @apply backdrop-filter backdrop-blur-md bg-clip-padding;
  @apply max-w-6xl mx-auto;
}

/* .site-logo {
  @apply flex items-center;
} */

.site-logo > .wrapper {
  @apply flex items-center gap-2;
}

.site-logo__img-cont {
  @apply w-8 h-8 overflow-hidden rounded-full;
}

.site-logo__text {
  @apply text-lg font-bold;
}
</style>
