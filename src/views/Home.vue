<template>
<div>
    <label class="block px-2 pt-1 md:px-16 md:pt-8">
      <input
        type="text"
        class="form-input mt-1 block w-full"
        placeholder="Search a NBA Player"
        @change="search"
      />
    </label>
    <br />
    <div class="flex flex-col flex-warp justify-center items-center">
      <table class="border px-4 py-2 font-semibold">
        <tr>
          <td class="border px-4 py-2">First Name</td>
          <td class="border px-4 py-2">Last Name</td>
          <td class="border px-4 py-2">Height Feet</td>
          <td class="border px-4 py-2">Height Inches</td>
          <td class="border px-4 py-2">Weight In Pounds</td>
        </tr>
        <tr v-for="nba in player" v-bind:key="nba.id">
          <td class="border px-4 py-2">{{ nba.first_name }}</td>
          <td class="border px-4 py-2">{{ nba.last_name }}</td>
          <td class="border px-4 py-2">{{ nba.height_feet }}</td>
          <td class="border px-4 py-2">{{ nba.height_inches }}</td>
          <td class="border px-4 py-2">{{ nba.weight_pounds }}</td>
          <td class="border px-4 py-2">
            <a href="">
              View
            </a>
          <td class="border px-4 py-2">
            <button @click="deleteRow(nba.id)">
              Delete
            </button>
          </td>
        </tr>
      </table>
    </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'nba',
  data() {
    return {
      search: '',
      player: undefined}
  },
  methods: {

    getNBA() 
    {
    axios
      .get('https://free-nba.p.rapidapi.com/players', {
        headers: {
          'x-rapidapi-key':
            '82525bb0afmsh4e9d274028f4857p1ecaafjsn99e87f447a64',
        },
      })
      .then(resp => {
        this.player = resp.data.data
        console.warn(resp.data.data)
      })
    },

  },
  mounted() {
    this.getNBA()
  },
}
</script>