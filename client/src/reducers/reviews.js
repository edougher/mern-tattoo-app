const reviews = (reviews = null, action) => {
  switch (action.type) {
    case "FETCH_USER_REVIEWS":
      console.log(action.reviews);
      return { ...reviews, ...action.data };
      
    default:
      return reviews;
  }
};

export default reviews;
