export default function getMutations() {
  return {
    SET_NODE_ENV(state, value) {
      state.nodeEnv = value;
    },
    SET_LANG(state, locale) {
      if (state.locales.indexOf(locale) !== -1) {
        state.locale = locale;
      }
    },
    SET_DEVICE_TYPE: (state, value) => {
      state.deviceType = value;
    }
  };
}
