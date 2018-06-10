<template>
    <div id="app">
        <h1>Users</h1>
        <div class="buttons-wrapper">
            <button
             @click="loadUsers"
             type="button"
            >LOAD
            </button>

            <button
             @click="postUser"
             type="button"
            >ADD
            </button>
        </div>

        <EntityTable :entities="users">
            <template
             slot="actions"
             slot-scope="{entity}"
            >
                <button
                 type="button"
                 @click="deleteUser(entity)"
                >DELETE
                </button>
            </template>
        </EntityTable>
    </div>
</template>

<script>
  import EntityTable from './components/EntityTable';

  export default {
    name      : 'app',
    components: {
      EntityTable,
    },
    computed  : {
      users() {
        return this.$store.getters['users'];
      }
    },
    methods   : {
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
    button {
        margin-right: 1em;
    }
</style>