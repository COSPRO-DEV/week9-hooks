import { useRef, useEffect, useState } from 'react'

function SearchBox() {
  const inputRef = useRef(null)
  const renderCount = useRef(0)
  const [searchText, setSearchText] = useState('')

  // Runs on every render. Changing a ref does NOT trigger another render.
  renderCount.current += 1

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div>
      <h2>Search Box</h2>
      <input
        ref={inputRef}
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search..."
      />
      <p>You typed: {searchText}</p>
      <p>Render count: {renderCount.current}</p>
    </div>
  )
}

export default SearchBox