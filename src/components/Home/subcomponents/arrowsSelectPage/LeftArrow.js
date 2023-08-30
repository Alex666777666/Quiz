const handleLeftArrow = (
  setActivePage,
  setFirstCategoriesVisible,
  setLastCategoriesVisible
) => {
  setActivePage(1)
  setFirstCategoriesVisible(true)
  setLastCategoriesVisible(false)
}

export default handleLeftArrow
