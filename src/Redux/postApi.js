import axios from "axios";

export const postApi = async () => {
  let res = await axios.get("https://good-blue-cygnet-cuff.cyclic.app/carts/", {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
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
    "https://good-blue-cygnet-cuff.cyclic.app/carts/add",
    payload,
    {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }
  );
  return res.data;
};


export const getGalleryApi = async () => {
  let res = await axios.get(
    "https://busy-jade-bass-coat.cyclic.app/personalgalleries"
  );
  return res.data;
};

export const addGalleryApi = async (payload) => {
  let res = await axios.post(
    "https://busy-jade-bass-coat.cyclic.app/personalgalleries/create",
    payload
  );
  return res.data;
};