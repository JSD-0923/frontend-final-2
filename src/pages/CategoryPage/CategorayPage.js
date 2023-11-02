import React from 'react'
import CategoryCards from '../../components/CategoryCards/CategoryCards'
import PaginationButtons from '../../components/PaginationButtons/PaginationButtons'
import CategoryPath from '../../components/CategoryPath/CategoryPath'
const CategorayPage = () => {
  return (
    <div>
      <CategoryCards />
      <PaginationButtons />
      <CategoryPath />
    </div>
  )
}

export default CategorayPage
