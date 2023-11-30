import { create } from "zustand";



const useGamesStore = create((set) => ({
  searchQuery: "",
  games: [],
  updateSearchQuery: (input) => set((state) => ({ searchQuery: input })),
  fetchGames: async () => set(async (state) => ({ games: await fetchGamesByName(state.searchQuery) })),
}))

export default useGamesStore;