export const convertArrayNumberPage = (numberPage, currentPage) => {

  const totalVisibilty = 2;
  let pageArray = []
  for (let index = 1; index < numberPage + 1; index++) {
    pageArray.push(index)
  }
  if (currentPage === 1 || currentPage === 2) return pageArray.slice(0, 5)
  return pageArray.slice(currentPage - 3, currentPage + totalVisibilty);
}
