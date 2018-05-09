import axios from 'axios';

export const fetchBooks = ({ commit }, { limit, offset }) => {
  const fetchName = `limit:${limit}---offset:${offset}`;

  axios
    .get('http://localhost:3000/api', { params: { limit, offset } })
    .then((result) => {
      commit('setBooks', { fetchName, data: result.data });
    })
    .catch(console.log);
};

export const navDrawer = ({ commit }, payload) => commit('navDrawer', payload);
