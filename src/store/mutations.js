const mutations = {
  setBooks(state, { fetchName, data }) {
    console.log(fetchName);

    state.books[fetchName] = data;
  },

  globalSearch(state, payload) {
    state.globalSearchString = payload;
  },

  navDrawer(state, payload) {
    state.navDrawer = payload;
  },

  /**
   * Auth Firebase
   */
  setUser(state, payload) {
    state.user = payload;
  },

  logout(state) {
    state.user = null;
  },
};

module.exports = mutations;
