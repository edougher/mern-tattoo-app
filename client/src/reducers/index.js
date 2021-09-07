import { combineReducers } from "redux";

import appts from "./appts";
import auth from "./auth";
import reviews from "./reviews";
import reviewAppt from "./reviewAppt";

export default combineReducers({ auth, appts, reviewAppt, reviews });
