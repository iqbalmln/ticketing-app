<template>
  <div class="flex items-center justify-center w-full h-screen">
    <form class="w-1/3 flex flex-col gap-4 items-center justify-center">
      <div class="text-center">
        <i class='bx bx-desktop text-9xl' />
        <h1 class="text-4xl">Ticketing Helpdesk</h1>
      </div>
      <div class="w-full flex items-center border border-gray-700 rounded-md px-2">
          <i class='bx bx-user text-2xl' />
        <input type="text" placeholder="Username.." class="py-2 pl-2 w-full focus:outline-none">
      </div>
      <div class="w-full flex items-center border border-gray-700 rounded-md px-2">
        <i class='bx bx-lock-alt text-2xl' />
        <input type="password" placeholder="Password.." class="py-2 pl-2 w-full focus:outline-none">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>