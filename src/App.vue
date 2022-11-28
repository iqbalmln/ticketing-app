<template>
  <div class="w-full">
    <Navbar v-if="['Home', 'Add', 'TicketDetail'].includes($route.name)" />
    <div class="flex height-custom">
      <Sidebar v-if="['Home', 'Add', 'TicketDetail'].includes($route.name)" />
      <router-view>
      </router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';

export default {
    setup() {
        // Create data / vars
        // Check to see if user is already logged in
        // If user does not exist, need to make app ready
        // Runs when there is a auth state change
        // if user is logged in, this will fire
        return {};
    },
    components: { Navbar, Sidebar }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap");
</style>
