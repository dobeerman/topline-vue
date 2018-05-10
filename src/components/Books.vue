<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12>
        <v-text-field
          v-model="search"
          name="search"
          label="Search by Title, Description and Author name"
          id="search"
        ></v-text-field>
      </v-flex>
    </v-layout>

    <v-layout column align-center="">
      <v-data-iterator
        :items="books"
        :rows-per-page-items="rowsPerPageItems"
        :pagination.sync="pagination"
        :total-items="totalItems"
        :loading="loading"
        content-tag="v-layout"
        row
        wrap
      >
        <v-flex
          slot="item"
          slot-scope="props"
          xs12
          sm6
          md4
          lg3
          d-flex
        >
            <!-- height="450" -->
          <v-card
            :to="{ name: 'BooksPage', params: { id: props.item.id } }"
          >
            <v-card-media
              :src="props.item.imageUrl"
              height="150px">
              <v-card-title primary-title>
                  <span class="title white--text">{{ props.item.title }}</span>
              </v-card-title>
            </v-card-media>
            <v-list-tile class="pl-0 pt-3">
              <v-list-tile-avatar>
                <img :src="props.item.avatar">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title
                  v-html="props.item.user_name"
                ></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-card-text pb-3>
              <h4>{{ props.item.date | date }}</h4>
            </v-card-text>
            <v-card-text>
              <div v-html="props.item.description"></div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-data-iterator>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Book',

  data() {
    return {
      search: '',
      where: '',
      totalItems: 0,
      loading: true,
      rowsPerPageItems: [4, 8, 12],
      pagination: {
        rowsPerPage: 4,
      },

      books: [],
    };
  },

  methods: {
    async fetchBooks() {
      const options = {
        params: {
          limit: this.pagination.rowsPerPage,
          offset: this.pagination.page,
        },
      };

      if (this.where) {
        Object.assign(options.params, { where: this.where });
      }

      const books = await this.$http
        .get('http://localhost:3000/api', options)
        .then(response => response.data, console.log);

      this.loading = false;
      this.books = books.data;
      this.totalItems = books.pagination.total;
    },
  },

  created() {
    this.fetchBooks();
  },

  watch: {
    search: {
      handler(val) {
        this.where = `users.user_name like "%${val}%" or books.title like "%${val}%" or books.description like "%${val}%"`;

        this.fetchBooks();
      },
    },

    $route: {
      handler(routeVal) {
        this.where.author = routeVal.query.author;
      },
    },

    pagination: {
      handler() {
        this.fetchBooks();
      },
    },

    deep: true,
  },
};
</script>
