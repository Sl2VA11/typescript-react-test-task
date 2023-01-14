import { instance } from "../helpers/instance";

export const getArticleById = async (id: number) => {
  const { data } = await instance.get(`/v3/articles/${id}`);

  return data;
};
