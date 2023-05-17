import { useState } from 'react'

export function useSearch () {
  const [search, setSearchQuery] = useState('')

  const updateSearchQuery = (event) => {
    const searchData = event
    setSearchQuery(searchData)
  }

  return { search, updateSearchQuery }
}
