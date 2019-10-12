const state = () => ({
  app: ['a', 'p ', 'p']
})

const mutations = {
  add(state, text) {
    state.list.push(text)
  }
}

const actions = {
  add: ({
      commit
    },
    text) => {
    commit('add', text)
  }
}

export default {
  namspaced: true,
  state,
  mutations,
  actions
}
