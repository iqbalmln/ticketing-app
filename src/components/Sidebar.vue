<template>
  <div class="w-64 bg-blue-brand text-white py-12 flex flex-col justify-between">
    <div>
      <ul
        class="flex flex-col gap-4 mb-6"
        v-for="menu in menuLists"
        :key="menu.id"
      >
        <router-link :to="menu.path" class="p-3 border-b-2 border-transparent border-b-blue-brand flex items-center gap-2">
          <i :class="menu.icon" class="text-xl" />
          <p class="text-xl">{{ menu.name }}</p>
        </router-link>
      </ul>
    </div>
    <router-link to="/logout" class="p-3 border-b-2 border-transparent border-b-blue-brand flex items-center gap-2">
      <i class='bx bx-door-open text-xl' />
      <p class="text-xl">Logout</p>
    </router-link>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const menuLists = ref([
      {
        id: 0,
        name: "Tickets",
        path: "/",
        icon: "bx bx-envelope",
      },
      {
        id: 1,
        name: "Add",
        path: "/add",
        icon: "bx bx-plus",
      },
    ]);
    return {
      menuLists,
    };
  },
};
</script>

<style lang="scss" scoped></style>
