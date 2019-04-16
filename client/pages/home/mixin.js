import { mapState } from 'vuex';

export default {
  props: {
    shows: {
      type: Array,
      default: () => []
    }
  },
  computed: mapState(['locale'])
};
