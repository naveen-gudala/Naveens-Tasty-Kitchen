import {BsFilterLeft} from 'react-icons/bs'

import './index.css'

const RestaurantsHeader = props => {
  const {sortByOptions, selectedSortByValue, updateSortByValue} = props

  const onChangeOption = event => {
    updateSortByValue(event.target.value)
  }

  return (
    <div>
      <div>
        <h1 className="popular-rest-heading"> Popular Restaurants </h1>
        <div className="filters-container">
          <p className="description">
            Select Your favourite restaurant special dish and make your day
            happy...
          </p>
          <div className="select-container">
            <BsFilterLeft width={24} height={24} className="filter" />
            <p className="filter-heading">Sort By</p>
            <select
              value={selectedSortByValue}
              onChange={onChangeOption}
              className="select-option"
            >
              {sortByOptions.map(eachOption => (
                <option key={eachOption.id} value={eachOption.value}>
                  {eachOption.displayText}
                </option>
              ))}
            </select>
          </div>
        </div>
        <hr className="header" />
      </div>
    </div>
  )
}

export default RestaurantsHeader
