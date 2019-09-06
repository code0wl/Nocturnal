import { FILTER_SEARCH } from "../actions/actions";

export default function filter(state = [], action) {
  switch (action.type) {
    case FILTER_SEARCH:
      return [...state, { ...action.filterValue }];
    default:
      return [{}, ...state];
  }
}
