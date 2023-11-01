import React from 'react'
import CategoryName from '../CategoryName/CategoryName'
import CategoryCards from '../CategoryCards/CategoryCards'
import PaginationButtons from '../PaginationButtons/PaginationButtons'
const CategoryPageContainer = () => {
  return (
    <div>
      <CategoryName />
      <CategoryCards />
      <PaginationButtons />
    </div>
  )
}

export default CategoryPageContainer
