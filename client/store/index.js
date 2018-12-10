import getState from './state/state';
import getMutations from './mutations/mutations';
import getActions from './actions/actions';
import getGetters from './getters/getters';

export const state = getState;
export const actions = getActions();
export const getters = getGetters();
export const mutations = getMutations();
