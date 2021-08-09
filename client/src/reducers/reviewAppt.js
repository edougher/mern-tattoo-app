// eslint-disable-next-line import/no-anonymous-default-export
export default (apptReview = {}, action) => {
  switch (action.type) {
    case "CREATE_REVIEW":
      return apptReview
        case "SET_CURRENT_APPT":
            return { ...apptReview, ...action.payload }
      default:
        return apptReview;
    }
  };