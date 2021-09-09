const reviews = (reviews = [], action) => {
    console.log(action.reviews);
  switch (action.type) {
    case "FETCH_USER_REVIEWS":
      //console.log(action.reviews);
      return [ ...reviews, ...action.reviews ]
      
    default:
      return reviews;
  }
};

export default reviews;
