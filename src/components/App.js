import React, { useEffect, useState } from 'react'
import './../styles/App.css'
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig']

const App = () => {
  const [filteredFruits, setFilteredFruits] = useState(fruits)
  const [searchText, setSearchText] = useState('')
  
  useEffect(() => {
    setFilteredFruits(fruits.filter((fruit)=>fruit.startsWith(searchText)))
  }, [searchText])
  
  const handleChange = (e) => {
    setSearchText(e.target.value)
  }

	return (
		<div>
			{/* Do not remove the main div */}
			<h1>Search item</h1>
			<input type='search' value={searchText} onChange={handleChange}/>
			<ul>
				{filteredFruits.map((fruit, index) => (
					<li key={index}>{fruit}</li>
				))}
			</ul>
		</div>
	)
}

export default App
