
const state = {
  product: 'produce1',
  obj: {},
}

const getters = {
  getProduct (state) {
    return state.product;
  },
}

const mutations = {
  setProduct (state, value) {
    state.product = value;
  },
  setObj (state, value) {
    state.obj = {...obj, ...value};
  }
}

const actions = {
  modifyProduct(context,params){
    context.commit("setProduct",params);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

