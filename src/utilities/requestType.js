import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// export const getRequest = async (api) => {
//   axios
//     .get(api)
//     .then((data) => console.log(data).catch((err) => console.log(err)));
// };
export const fetchProduct = (api) => {
  return useQuery({
    queryKey: ["getProduct"],
    queryFn: async () => {
      const { data } = await axios.get(api);
      return data.items;
    },
  });
};
export const fetchCategory = (api) => {
  return useQuery({
    queryKey: ["getCategory"],
    queryFn: async () => {
      const { data } = await axios.get(api);
      return data.items;
    },
  });
};
