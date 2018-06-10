<template>
    <div id="app">
        <div>
            <h1>Users</h1>
            <div class="buttons-wrapper">
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

        <div>
            <h1>Orders</h1>
            <div class="buttons-wrapper">
                <button
                 @click="postOrder"
                 type="button"
                >ADD
                </button>
            </div>

            <EntityTable :entities="orders">
                <template
                 slot="actions"
                 slot-scope="{entity}"
                >
                    <button
                     type="button"
                     @click="deleteOrder(entity)"
                    >DELETE
                    </button>
                </template>
            </EntityTable>
        </div>
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
      orders() {
        return this.$store.getters['orders/entities'];
      },
      users() {
        return this.$store.getters['users/entities'];
      }
    },
    methods   : {
      deleteOrder(order) {
        return this.$store.dispatch('orders/deleteOne', order);
      },
      deleteUser(user) {
        return this.$store.dispatch('users/deleteOne', user);
      },
      loadOrders() {
        return this.$store.dispatch('orders/loadMany');
      },
      loadUsers() {
        return this.$store.dispatch('users/loadMany');
      },
      postOrder() {
        const order = {
          name: Date.now(),
        };

        return this.$store.dispatch('orders/postOne', order);
      },
      postUser() {
        const user = {
          name: Date.now(),
        };

        return this.$store.dispatch('users/postOne', user);
      }
    },
    mounted() {
      this.loadUsers();
      this.loadOrders();
    }
  }
</script>

<style scoped>
    button {
        margin-right: 1em;
    }
</style>