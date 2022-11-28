<template>
  <div class="relative bg-slate w-full overflow-hidden p-12 flex flex-col gap-4">
    <div>
      <h2 class="text-4xl mb-2">Tickets</h2>
      <hr>
    </div>
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    ID Ticket
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Informers
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody v-for="ticket in tickets" :key="ticket.id">
                <tr
                  class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                >
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    {{ ticket.id }}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {{ ticket.informers }}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {{ ticket.category }}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap line-clamp-4"
                  >
                    <span class="line-clamp-3">
                      {{ ticket.title }}
                    </span>
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    <span
                      :class="[
                        ticket.status === 'proses'
                          ? 'bg-blue-400'
                          : ticket.status === 'pending'
                          ? 'bg-red-500'
                          : 'bg-green-500',
                      ]"
                      class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold rounded-full text-white"
                    >
                      {{ ticket.status }}
                    </span>
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    <router-link :to="'/' + ticket.id">Details</router-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const tickets = ref([
      {
        id: "A123",
        informers: "Putra",
        category: "Data",
        title: "Akun Error",
        status: "proses",
      },
      {
        id: "A234",
        informers: "Putra",
        category: "Data",
        title: "Akun Error",
        status: "done",
      },
      {
        id: "B144",
        informers: "Putra",
        category: "Data",
        title: "Lorem ipsum dolor sit amet",
        status: "proses",
      },
      {
        id: "C345",
        informers: "Putra",
        category: "Data",
        title: "Akun Error",
        status: "pending",
      },
    ]);
    return {
      tickets,
    };
  },
};
</script>

<style lang="scss" scoped></style>
