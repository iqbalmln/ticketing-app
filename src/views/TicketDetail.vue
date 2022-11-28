<template>
  <div
    class="relative bg-slate w-full overflow-hidden p-12 flex flex-col gap-4"
  >
    <div>
      <h2 class="text-4xl mb-2">Ticket Details</h2>
      <hr />
    </div>
    <div>
      <span
        class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-500 text-white rounded-full"
        >Pending</span
      >
    </div>
    <div class="flex gap-8">
      <div class="left flex flex-col gap-8 flex-1">
        <div class="flex flex-col gap-2">
          <label for="id">ID Ticket</label>
          <input
            type="text"
            class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding
            border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
            id="id"
            value="A123"
            aria-label="readonly input example"
            readonly
          />
        </div>
        <div class="flex flex-col gap-2">
          <label for="id">Informers</label>
          <input
            type="text"
            class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding
            border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
            id="id"
            value="Putra"
            aria-label="readonly input example"
            readonly
          />
        </div>
        <div class="flex flex-col gap-2">
          <label for="id">Title</label>
          <input
            type="text"
            class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding
            border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
            id="id"
            value="Akun Error"
            aria-label="readonly input example"
            readonly
          />
        </div>
        <div class="flex flex-col gap-2">
          <label for="id">Category</label>
          <input
            type="text"
            class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding
            border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
            id="id"
            value="Data"
            aria-label="readonly input example"
            readonly
          />
        </div>
      </div>
      <div class="right flex flex-col gap-8 flex-1">
        <div class="flex flex-col gap-2">
          <div class="mb-3">
            <label
              for="message"
              class="form-label inline-block mb-2 text-gray-700"
              >Message</label
            >
            <textarea
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="message"
              rows="5"
              readonly
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lorem neque, volutpat a vehicula elementum, malesuada consequat justo. Vestibulum nisi metus, efficitur ac ultrices cursus, efficitur.
          </textarea
            >
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <label for="id">PIC</label>
          <input
            type="text"
            class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding
            border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
            id="id"
            value="n/a"
            aria-label="readonly input example"
            readonly
          />
        </div>
        <div class="flex flex-col gap-2">
          <label for="id">Reply</label>
          <input
            type="text"
            class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding
            border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
            id="id"
            value="n/a"
            aria-label="readonly input example"
            readonly
          />
        </div>
      </div>
    </div>
    <router-link to="/" class="mt-12 flex items-center gap-1">
      <i class='bx bx-left-arrow-alt' />
      Back
    </router-link>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
