<template>
  <v-container fluid grid-list-lg>
    <v-layout align-center>
      <v-flex xs8 mx-auto>
        <v-form @submit.prevent="onSubmit">
          <v-text-field
            v-model="book.user_name"
            name="name"
            label="Author"
            id="author"
          ></v-text-field>
          <v-text-field
            v-model="book.title"
            name="title"
            label="Title"
            id="title"
          ></v-text-field>
          <v-text-field
            v-model="book.description"
            name="description"
            label="Description"
            id="description"
            multi-line
          ></v-text-field>
          <v-text-field
            v-model="book.date"
            name="date"
            label="Date"
            id="date"
            mask="##/##/####"
          ></v-text-field>
          <v-text-field
            v-model="book.imageUrl"
            name="imageUrl"
            label="Image URL"
            id="imageUrl"
          ></v-text-field>
          <img v-if="book.imageUrl" :src="book.imageUrl" :alt="book.title" width="200">
          <v-layout row wrap>
            <v-flex xs12>
              <v-btn
                color="success"
                type="submit"
              >Save</v-btn>
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: '',
      loading: true,
      book: {
        user_name: '',
        title: '',
        description: '',
        date: '',
        imageUrl: '',
      },
    };
  },

  methods: {
    onSubmit() {
      if (this.book.user_name && this.book.title && this.book.date) {
        this.$http
          .post('http://localhost:3000/api/create', {
            query: { book: this.book },
          })
          .then(data => this.$router.push(`/books/${data.body[0]}`));
      }
    },
  },
};
</script>
