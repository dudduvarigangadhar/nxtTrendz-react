import './index.css'

const FiltersGroup = props => {
  const {categoryOptions, ratingsList} = props

  //   return (
  //     <ul className="filters-group-container">
  //       <p className="category-content">Category</p>
  //       {categoryOptions.map(eachItem => (
  //         <li className="category-list-item" key={eachItem.categoryId}>
  //           <button type="button" className="category-button">
  //             {eachItem.name}
  //           </button>
  //         </li>
  //       ))}

  //       <p className="rating-content">Rating</p>
  //       {ratingsList.map(eachItem => (
  //         <li className="rating-list-container" key={eachItem.ratingId}>
  //           <button type="button" className="rating-button">
  //             <img
  //               src={eachItem.imageUrl}
  //               alt="rating"
  //               className="rating-image"
  //             />
  //             <p className="rating-above">& up</p>
  //           </button>
  //         </li>
  //       ))}
  //     </ul>
  //   )
  const renderSearchInput = () => {
      const {searchInput} = props 
      return(
          
      )

  }

  const renderProductCategories = () => {}

  const renderRatingsFiltersList = () => {

  }

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductCategories()}
      {renderRatingsFiltersList()}
      <button type="button" className="clear-button">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
