<template>
    <table>
        <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr
         v-for="entity in entities"
         :key="entity.id"
        >
            <td>{{ entity.id }}</td>
            <td>{{ entity.name }}</td>
            <td>
                <slot
                 name="actions"
                 :entity="entity"
                ></slot>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
  export default {
    props: {
      entities: {
        type: Array,
        default() {
          return [];
        }
      }
    }
  };
</script>

<style scoped>
    table {
        margin: 1em;
    }

    table, thead, tbody, tr, th, td {
        border-collapse: collapse;
        border: 1px solid #eee;
        padding: 0.5em;
    }

    th {
        width: 120px;
    }
</style>