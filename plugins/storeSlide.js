module.exports = (ctx) => {
  return ctx.store.dispatch("slide/fetchArticles");
}