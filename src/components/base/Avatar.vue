<template>
  <div class="flex items-center gap-4">
    <i class='bx bxs-user-circle text-4xl' />
    {{ user }}
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: String,
      default: 'Customert Service'
    }
  },
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>