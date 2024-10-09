<template>
  <table>
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">Value</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in payload" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.value }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'MzTable',
  props: {
    payload: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss">
table {
  width: 100%;
  border: 1px solid #ccc;
  border-collapse: collapse;
  th,
  td {
    padding: 10px;
    border: 1px solid #ccc;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
}
</style>
