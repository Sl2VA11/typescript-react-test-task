import { instance } from "../helpers/instance"

export const getArticle = async () => {
   const {data} = await instance.get("/v3/articles");
  

   return data
}

