import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchData = createAsyncThunk(
  "characters/fetchData",
  async ({ page = 1, query = "" }) => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}&name=${encodeURIComponent(query)}`
      );
      if (!response.ok) throw new Error("Failed to fetch");
      return await response.json();
    } catch (error) {
      throw error;
    }
  }
);
const initialState = {
  characters: [],
  info: {},
  visitedProfiles: [],
  status: "idle",
  error: null,
  currentPage: 1,
  searchQuery: "",
};
const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    addVisitedProfile: (state, action) => {
      const exists = state.visitedProfiles.findIndex((char) => char.id === action.payload.id);
      if (exists === -1) {
        state.visitedProfiles.unshift(action.payload);
        if (state.visitedProfiles.length > 5) {
          state.visitedProfiles.pop();
        }
      }
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.characters = action.payload.results || [];
        state.info = action.payload.info || {};
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const { addVisitedProfile, setCurrentPage, setSearchQuery } = characterSlice.actions;
export const selectCharacters = (state) => state.characters.characters;
export const selectStatus = (state) => state.characters.status;
export const selectError = (state) => state.characters.error;
export const selectCurrentPage = (state) => state.characters.currentPage;
export const selectInfo = (state) => state.characters.info;
export const selectVisitedProfiles = (state) => state.characters.visitedProfiles;
export const selectSearchQuery = (state) => state.characters.searchQuery;
export default characterSlice.reducer;