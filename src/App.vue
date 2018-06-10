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
        return this.$store.getters['users/entities'];
      }
    },
    methods   : {
      deleteUser(user) {
        return this.$store.dispatch('users/deleteOne', user)
          .then(() => {
            return this.$store.dispatch('users/loadMany');
          });
      },
      loadUsers() {
        return this.$store.dispatch('users/loadMany');
      },
      postUser() {
        const user = {
          name: Date.now(),
        };

        return this.$store.dispatch('users/postOne', user);
      }
    }
  }
</script>

<style scoped>
    button {
        margin-right: 1em;
    }
</style>