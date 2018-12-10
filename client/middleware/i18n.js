export default function ({
  app,
  store,
  params,
  query
}) {
  const defaultLocale = app.i18n.fallbackLocale;

  // If middleware is called from hot module replacement, ignore it
  if (!process.server) return;

  const locale = params.locale || query.locale || defaultLocale;

  if (store.state.locales.indexOf(locale) === -1) {
    throw new Error({ message: 'This page could not be found.', statusCode: 404 });
  }
  // Set locale
  store.commit('SET_LANG', locale);
  app.i18n.locale = store.state.locale;
}
