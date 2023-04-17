import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@/states/hooks'
import { fetchPokemon } from '@/states/features/pokemon/pokemonSlices'
import { RootState } from '@/states/store'

export default function Home() {
  const { list } = useAppSelector((state: RootState) => state.pokemon)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPokemon())
  }, [dispatch])

  return (
    <main className="p-5">
      <div className="bg-white rounded-lg shadow-md p-6 border-2 border-purple-500">
        <h2 className="text-xl font-bold text-purple-500 mb-4">List Pokemon</h2>
        <ul className="list-disc pl-6">
          {list.map((item) => (
            <li key={item.name} className="mb-2 text-gray-700">{item.name}</li>
          ))}
        </ul>
      </div>
    </main>
  )
}
