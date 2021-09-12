import * as actionTypes from "./Actions.types";

export const deletePost = (id) => ({
  type: actionTypes.DELETE_POST,
  id: id,
});
