<script setup lang="ts">
import { Bell } from "lucide-vue-next";

const { toast } = useToast();
</script>
<template>
  <div class="toast__cont">
    <div v-show="toast.show" class="toast" :class="`${toast.type}`">
      <div class="toast__icon">
        <Bell class="icon" />
      </div>
      <div class="toast__content">
        <!-- <p class="toast__title">Copied!</p> -->
        <p class="toast__desc">{{ toast.message }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.toast__cont {
  @apply fixed bottom-4 right-4;
}

.toast {
  @apply flex items-center gap-4 p-4 bg-white rounded-2xl shadow-slate-600/20;
}

.toast__icon {
  @apply flex items-center justify-center w-12 h-12 bg-slate-100 rounded-full;
}

.toast__content {
  @apply flex flex-col gap-1;
}

.toast__title {
  @apply text-sm font-semibold text-slate-900;
}

.toast__desc {
  @apply text-sm text-slate-600;
}
</style>
