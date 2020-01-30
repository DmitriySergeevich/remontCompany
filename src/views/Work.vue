<template>
  <div class="work">
    <h2>WORK</h2>
    <Workitem v-bind:todo="todo" v-for="todo of todos" :key="todo" />
  </div>
</template>


<script>
import Workitem from "./../components/workItem";

export default {
  components: {
    Workitem
  },
  data() {
    return {
      todos: []
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(response => response.json())
      .then(json =>
         {
          this.todos = json;
          this.loading = false;
        }
      );
  }
};
</script>