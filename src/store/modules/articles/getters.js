export const articles = (state) => {
    return state.articles;
  };
  
  export const article = (state, id) => {
    return state.articles.find(article => article.id === id);
  };
  
  