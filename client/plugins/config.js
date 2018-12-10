export default function ({
  env,
  store: { commit }
}) {
  commit('SET_NODE_ENV', env.NODE_ENV);
  commit('SET_BASE_DATA_API_URL', env.BASE_DATA_API_URL);
}
