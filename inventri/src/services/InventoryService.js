import axios from "axios";
const api = "https://inventribackend.shahbazahmad12.repl.co";

const fetchInventory = () => async (dispatch) => {
  try {
    const response = await axios.get(`${api}/items`);
    if (response.status === 200) {
      dispatch({ type: "FETCH_INVENTORY", payload: response.data.items });
    }
  } catch (error) {
    console.error("SERVER ERROR");
  }
};

const addItem = (item) => async (dispatch) => {
  try {
    const response = await axios.post(`${api}/items`, {
      itemData: item,
    });
    if (response.status === 201) {
      dispatch({ type: "ADD_ITEM", payload: response.data.item });
    }
  } catch (error) {
    console.error("SERVER ERROR");
  }
};

const updateItem = (itemId) => async (dispatch) => {
  try {
    const response = await axios.post(`${api}/items/${itemId}`);
    if (response.status === 200) {
      dispatch({
        type: "UPDATE_ITEM",
        payload: { id: itemId, item: response.data.item },
      });
    }
  } catch (error) {
    console.error("SERVER ERROR");
  }
};

const deleteItem = (itemId) => async (dispatch) => {
  console.log("Reached Service...");
  try {
    const response = await axios.delete(`${api}/items/${itemId}`);
    if (response.status === 200) {
      dispatch({ type: "DELETE_ITEM", payload: itemId });
    }
  } catch (error) {
    console.error("SERVER ERROR");
  }
};

export { fetchInventory, addItem, updateItem, deleteItem };
