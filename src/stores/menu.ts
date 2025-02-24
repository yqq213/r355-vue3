import { defineStore } from 'pinia'

export const useMenuStore = defineStore({
  id: 'map-store',
  state: () => ({
    currentMenu: {},

  }),
  getters: {
    currentSubMenu(state) {
      return state.currentMenu.children ?? []
    }
  },
  actions: {
    setCurrentMenu(value) {
      this.currentMenu = value
    },
  }
})