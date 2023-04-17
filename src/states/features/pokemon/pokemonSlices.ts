import { POKEMON_LIST } from '@/constants/endpoints'
import api from '@/utils/api'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export interface Pokemon {
  name: string
  url: string
}

export interface PokemonState {
  loading: boolean
  list: Pokemon[]
}

const initialState: PokemonState = {
  loading: false,
  list: []
}

export const fetchPokemon = createAsyncThunk(
  'pokemon/fetch',
  async () => {
    const response = await api({ endpoint: POKEMON_LIST })
    
    return response
  }
)

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPokemon.fulfilled, (state, action) => {
      state.list = action.payload.results
    })
  },
})

export default pokemonSlice.reducer