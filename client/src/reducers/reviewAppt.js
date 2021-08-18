// eslint-disable-next-line import/no-anonymous-default-export
export default (apptReview = {current: null, alreadyReviewed: null}, action) => {
  switch (action.type) {
    case "CREATE_REVIEW":
      debugger
      return {...apptReview, ...action.payload}
        case "SET_CURRENT_APPT":
            return { ...apptReview, ...action.payload }
      default:
        return apptReview;
    }
  };