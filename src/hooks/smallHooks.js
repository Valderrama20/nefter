const hooks = {
 newDate: (date) => {return new Date(date).toDateString()},

 details: (id) => {
    window.location.href = 'http://localhost:5173/collectionDetails'
    localStorage.setItem("collectionId", id)
}

}


export default hooks