<template>
  <div
    class="relative bg-slate w-full overflow-hidden p-12 flex flex-col gap-4"
  >
    <div>
      <h2 class="text-4xl mb-2">Add Ticket</h2>
      <hr />
    </div>
    <div class="flex flex-col gap-6 w-1/2">
      <div class="flex flex-col gap-2 w-full">
        <label for="id">Informer</label>
        <input
          type="text"
          class=" form-control block w-full px-3 py-1.5 text-base font-normal
                text-gray-700 bg-clip-padding border border-solid border-gray-300
                rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white
                focus:border-blue-600 focus:outline-none"
          id="id"
          placeholder="silahkan isi.."
          aria-label="readonly input example"
        />
      </div>
      <div class="flex flex-col gap-2 w-full">
        <label for="id">Category</label>
        <select
          class="form-select appearance-none block w-full px-3 py-1.5
              text-base font-normal text-gray-700 bg-white bg-clip-padding
              bg-no-repeat border border-solid border-gray-300 rounded transition
              ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
        >
          <option selected>Select a category</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="flex flex-col gap-2 w-full">
        <label for="id">Title</label>
        <input
          type="text"
          class=" form-control block w-full px-3 py-1.5 text-base font-normal
                text-gray-700 bg-clip-padding border border-solid border-gray-300
                rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white
                focus:border-blue-600 focus:outline-none"
          id="id"
          placeholder="silahkan isi.."
          aria-label="readonly input example"
        />
      </div>
      <div class="flex flex-col gap-2 w-full">
        <label for="message" class="form-label inline-block mb-2 text-gray-700"
          >Message</label
        >
        <textarea
          class="form-control block w-full px-3 py-1.5 text-base font-normal
                  text-gray-700 bg-white bg-clip-padding
                    border border-solid border-gray-300 rounded transition ease-in-out m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="message"
          rows="3"
          placeholder="Your message"
        ></textarea>
      </div>
      <div class="flex justify-center">
        <div class="w-full">
          <label
            for="formFile"
            class="form-label inline-block mb-2 text-gray-700"
            >Default file input example</label
          >
          <input
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                  bg-white bg-clip-padding border border-solid border-gray-300
                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white
                  focus:border-blue-600 focus:outline-none"
            type="file"
            id="formFile"
          />
        </div>
      </div>
      <button class= "self-start bg-blue-brand text-white px-4 py-2 rounded-lg">Add Ticket</button>
    </div>
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
