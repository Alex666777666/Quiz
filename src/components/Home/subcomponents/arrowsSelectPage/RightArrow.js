const handleRightArrow = (
  setActivePage,
  setFirstCategoriesVisible,
  setLastCategoriesVisible
) => {
  setActivePage(2)
  setFirstCategoriesVisible(false)
  setLastCategoriesVisible(true)
}

export default handleRightArrow
