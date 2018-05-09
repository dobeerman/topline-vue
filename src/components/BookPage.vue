<template>
  <v-container fluid grid-list-lg>
    <v-layout align-center>
      <v-flex v-if="loading" xs8>
        Loading...
      </v-flex>
      <v-flex v-else xs8 mx-auto>
        <v-card>
          <v-card-media
            :src="book.imageUrl"
            height="200px"
          >
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <div class="headline">{{ book.title }}</div>
              <span class="red--text">{{ book.date | date }}</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn
              flat
              :to="{name: 'BooksEdit', params: {id: book.id}}"
            >
              Edit
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click.native="show = !show">
              <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-slide-y-transition>
            <v-card-text v-show="show">
              {{ book.description }}
            </v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'BookPage',

  data() {
    return {
      loading: true,

      show: false,

      book: {},
    };
  },

  async beforeMount() {
    await this.$http
      .get('http://localhost:3000/api/getbook', {
        params: { id: this.$route.params.id },
      })
      .then(response => Object.assign(this.book, response.body));

    this.loading = false;
  },
};
</script>
