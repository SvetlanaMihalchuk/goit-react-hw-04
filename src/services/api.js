import axios from "axios";

export const fetchPictures = async (query, page, perPage) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=heL7gEIcJzw19P3A1E3c3zdQtdQ1dGLR4yvtMlaxvjU&query=${query}&page=${page}&per_page=${perPage}`
  );
  return response.data.results;
};
