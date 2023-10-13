import { getLastSaleDate } from "../services/DashboardService";

const initialState = {
  inventory: [],
  sales: [],
  lastSale: null,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_INVENTORY":
      return {
        ...state,
        inventory: action.payload,
      };
    case "ADD_ITEM":
      return {
        ...state,
        inventory: [...state.inventory, action.payload],
      };
    case "UPDATE_ITEM":
      return {
        ...state,
        inventory: state.inventory.map((i) =>
          i._id === action.payload.id ? { ...action.payload.item } : { ...i }
        ),
      };
    case "DELETE_ITEM":
      return {
        ...state,
        inventory: state.inventory.filter(({ _id }) => _id !== action.payload),
      };
    case "FETCH_SALES":
      return {
        ...state,
        sales: action.payload,
        lastSale: getLastSaleDate(
          action.payload.map(({ createdAt }) => createdAt)
        ),
      };
    case "ADD_SALE":
      return {
        ...state,
        sales: [...state.sales, action.payload],
      };
    default:
      return state;
  }
};

export default AppReducer;
