<script setup lang="ts">
import { CopyCheckIcon } from "lucide-vue-next";
import { CopyIcon } from "lucide-vue-next";
const { showToast } = useToast();
const { generateSlug } = useGenerateSlug();
const text = ref("");
const slug = ref("");
const isCopied = ref(false);

const handleGenerateSlug = (e: Event) => {
  e.preventDefault();
  slug.value = generateSlug(text.value, {
    useUnderScore: false,
  });
};

const handleCopy = () => {
  navigator.clipboard.writeText(slug.value);
  isCopied.value = true;
  showToast({
    message: "Copied!",
    duration: 2000,
    type: "success",
  });
};

watch(
  () => isCopied.value,
  () => {
    setTimeout(() => {
      isCopied.value = false;
    }, 2000);
  }
);
</script>

<template>
  <div class="form-cont">
    <form @submit="handleGenerateSlug" class="slug-generator-form">
      <div class="wrapper">
        <div class="form-control p-4">
          <label for="slug-input" class="form-label"> Enter your text </label>
          <textarea
            v-model="text"
            type="text"
            id="slug-input"
            class="form-input"
            placeholder="Convert to nice slug"
            autofocus
            required
          ></textarea>
        </div>
        <div class="action-cont p-4">
          <button type="submit" class="btn">
            <span class="text"> Generate </span>
          </button>
        </div>
      </div>
    </form>

    <div v-if="slug !== ''" class="slug-output__cont">
      <div class="slug-output">
        <code>
          {{ slug }}
        </code>

        <div class="action-cont">
          <button @click.prevent="handleCopy" type="button" class="btn">
            <CopyIcon v-if="!isCopied" class="icon icon--sm" />
            <CopyCheckIcon v-else class="icon icon--sm" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-cont {
  @apply w-full;
}

.slug-generator-form {
  @apply w-full border border-slate-200 bg-white rounded-3xl shadow-2xl shadow-blue-800/10;
}

.slug-output__cont {
  @apply w-full mt-4;
}

.slug-output {
  @apply w-full p-4 bg-white/40 border-2 border-white/60 rounded-3xl shadow-2xl shadow-blue-600/20 z-20;
  @apply bg-clip-padding backdrop-filter backdrop-blur-md;
}

.slug-output > code {
  @apply flex pb-2;
}
</style>
