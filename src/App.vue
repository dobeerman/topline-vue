<template>
  <v-app>
    <v-toolbar
      app
    >
      <v-btn exact flat :to="{name: 'HelloWorld'}">Home</v-btn>
      <v-btn exact flat :to="{name: 'Books'}">Books</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="success" :to="{name: 'AddBook'}">Add book</v-btn>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer fixed app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
