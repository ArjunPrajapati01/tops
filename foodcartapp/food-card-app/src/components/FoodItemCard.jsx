import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function FoodItemCard({ food }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(food));
  };

  return (
    <div className="card">
      <h2>{food.name}</h2>

      <p>{food.email}</p>

      <button onClick={handleAdd}>
        Add To Cart
      </button>
    </div>
  );
}