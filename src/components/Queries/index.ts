import { useContext, useEffect, useState } from "react";
import { authAxiosInstance } from "../Auth/utils";
import { AppDispatchContext } from "../Context/index";

interface SupplyItem {
  name: string;
  color: string;
  price: number;
  description: string;
}

interface EventData {
  supplyChainItemId: string;
  location: string;
  custodian: string;
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

export const useGetSupplyLastItemEvent = (id: string) => {
  const [data, setData] = useState<any[]>([]);

  const getData = async () => {
    //   TODO: Add typing and errors
    const results = await get<any>(`/api/items/${id}/last-event`);
    setData(results.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
};

export const createSupplyChainItem = async (
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

export const updateSupplyChainItem = async (
  id: string,
  data: SupplyItem
): Promise<any> => {
  try {
    const response = await authAxiosInstance.put(`/api/items/${id}`, data);
    return response.data;
  } catch (error) {
    const response = error?.response;
    if (response && response?.data && response?.data?.message) {
      return response?.data;
    } else {
      throw new Error("An error occurred while updating the item.");
    }
  }
};

// TODO: Add proper error handling for the routes
export const createItemEvent = async (
  itemId: string,
  eventData: EventData
): Promise<void> => {
  try {
    const response = await authAxiosInstance.post(
      `/api/items/${itemId}/events`,
      eventData
    );
    console.log("Event created successfully!", response);
  } catch (error) {
    throw new Error("An error occurred while creating event");
  }
};
