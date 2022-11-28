<template>
  <header class="w-full bg-blue-brand text-white height-custom-navbar px-12 flex justify-between items-center">
    <figcaption class="flex gap-4 items-center">
      <i class='bx bx-desktop text-4xl' />
      <h2 class="text-xl">Ticketing <br> Helpdesk</h2>
    </figcaption>
    <Avatar user="Customer Service" />
  </header>
</template>

<script>
import Avatar from './base/Avatar.vue';

export default {
    setup() {
        return {
        };
    },
    components: { Avatar }
};
</script>
