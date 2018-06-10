<template>
    <div id="app">
        <h1>Users</h1>
        <div class="buttons-wrapper">
            <button
             @click="loadUsers"
             type="button"
            >GET
            </button>

            <button
             @click="postUser"
             type="button"
            >POST
            </button>
        </div>
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
             v-for="user in users"
             :key="user.id"
            >
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>
                    <button
                     type="button"
                     @click="deleteUser(user)"
                    >DELETE
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
  export default {
    name    : 'app',
    computed: {
      users() {
        return this.$store.getters['users'];
      }
    },
    methods : {
      deleteUser(user) {
        return this.$store.dispatch('deleteUser', user)
          .then(() => {
            return this.$store.dispatch('loadUsers');
          });
      },
      loadUsers() {
        return this.$store.dispatch('loadUsers');
      },
      postUser() {
        const user = {
          name: Date.now(),
        };

        return this.$store.dispatch('postUser', user);
      }
    }
  }
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

    .buttons-wrapper button {
        margin-right: 1em;
    }
</style>