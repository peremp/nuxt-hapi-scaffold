export default function ({
  env,
  store: { commit }
}) {
  commit('SET_NODE_ENV', env.NODE_ENV);
}
