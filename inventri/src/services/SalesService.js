import axios from "axios";
const api = "https://inventribackend.shahbazahmad12.repl.co";

const fetchSales = () => async (dispatch) => {
  try {
    const response = await axios.get(`${api}/sales`);
    if (response.status === 200) {
      dispatch({ type: "FETCH_SALES", payload: response.data.sales });
    }
  } catch (error) {
    console.error("SERVER ERROR");
  }
};

const addSale = (sale) => async (dispatch) => {
  try {
    const response = await axios.post(`${api}/sales`, {
      saleData: sale,
    });
    if (response.status === 201) {
      dispatch({ type: "ADD_SALE", payload: response.data.sale });
    }
  } catch (error) {
    console.error("SERVER ERROR");
  }
};

export { fetchSales, addSale };
