import { useContext, useEffect, useState } from "react";
import { authAxiosInstance } from "../Auth/utils";
import { AppDispatchContext } from "../Context/index";

interface SupplyItem {
  name: string;
  color: string;
  price: number;
  description: string;
}

async function get<T>(path: string): Promise<T> {
  const { data } = await authAxiosInstance.get(path);
  return data;
}

export const useGetSupplyChainItems = () => {
  const [data, setData] = useState<any[]>([]);
  const { setItems } = useContext(AppDispatchContext);

  const getData = async () => {
    //   TODO: Add typing and errors
    const results = await get<any>("/api/items");
    setData(results.data);
    setItems(results.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
};

export const useCreateSupplyChainItem = async (
  supplyItem: SupplyItem
): Promise<void> => {
  try {
    await authAxiosInstance.post("/api/items", {
      ...supplyItem,
      price: Number(supplyItem.price),
    });

    // return data;
  } catch (error) {
    // Handle error here
    console.log("error >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", error);
  }
};
