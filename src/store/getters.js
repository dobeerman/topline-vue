export const getNavDrawerStatus = state => state.navDrawer;

export const getBooks = state => (payload) => {
  const { limit, offset } = payload;
  const fetchName = `limit:${limit}---offset:${offset}`;

  console.log(fetchName);
  return state.books;
};
