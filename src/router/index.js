import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Books from '@/components/Books';
import BookPage from '@/components/BookPage';
import BooksEdit from '@/components/BooksEdit';
import AddBook from '@/components/AddBook';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/books',
      name: 'Books',
      component: Books,
    },
    {
      path: '/books/:id',
      name: 'BooksPage',
      component: BookPage,
    },
    {
      path: '/books/:id/edit',
      name: 'BooksEdit',
      component: BooksEdit,
    },
    {
      path: '/books/add',
      name: 'AddBook',
      component: AddBook,
    },
  ],
});
