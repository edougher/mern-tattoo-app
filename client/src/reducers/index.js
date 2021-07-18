import { combineReducers } from "redux";

import appts from "./appts";
import auth from "./auth";

export default combineReducers({ auth, appts });
