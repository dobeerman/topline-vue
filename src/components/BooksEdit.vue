<template>
  <v-container fluid grid-list-lg>
    <v-layout align-center>
      <v-flex v-if="loading" xs8>
        Loading...
      </v-flex>
      <v-flex v-else xs8 mx-auto>
        <v-form @submit.prevent="onSubmit">
          <v-text-field
            v-model="book.user_name"
            name="name"
            label="Author"
            id="author"
            disabled
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
      book: {},
      authors: [],
    };
  },

  async beforeMount() {
    await this.$http.get('http://localhost:3000/api/authors').then((response) => {
      this.authors = response.body.map(author => ({
        text: author.user_name,
        value: author.id,
      }));
    });

    await this.$http
      .get('http://localhost:3000/api/getbook', {
        params: { id: this.$route.params.id },
      })
      .then((response) => {
        const day = new Date(response.body.date).getDate();

        let month = new Date(response.body.date).getMonth();
        month = `0${month + 1}`.substr(-2);

        const year = new Date(response.body.date).getFullYear();

        Object.assign(this.book, response.body, {
          date: `${day}${month}${year}`,
        });
      });

    this.loading = false;
  },

  methods: {
    onSubmit() {
      this.$http
        .post(`http://localhost:3000/api/update/${this.$route.params.id}`, {
          query: { book: this.book },
        })
        .then(() => this.$router.push('/books'));
    },
  },
};
</script>
