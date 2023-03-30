import axios from "axios";

export const postApi = async () => {
  let res = await axios.get(
    "https://busy-jade-bass-coat.cyclic.app/mypersonnel"
  );
  return res.data;
};

export const deletePostApi = async (id) => {
  let res = await axios.delete(
    "https://busy-jade-bass-coat.cyclic.app/admin/delete/$(id)"
  );
  return res.data;
};

export const addPostApi = async (payload) => {
  let res = await axios.post(
    "https://busy-jade-bass-coat.cyclic.app/admin/create",payload
  );
  return res.data;
};