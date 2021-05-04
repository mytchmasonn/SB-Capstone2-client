import baxios from "lib/baxios";

const fetcher = async (url) => {
  const token = sessionStorage.getItem("token");
  if (token !== null && token !== undefined) {
    const { data } = await baxios.post(url);
    return data;
  } else {
    return null;
  }
};

export default fetcher;
