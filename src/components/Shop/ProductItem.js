import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { carttemsActions } from "../../store/cartItemsSlice";


const ProductItem = (props) => {
  const { id, title, price, description } = props;
  const cartItemDispatch = useDispatch();

  const addMealsHandler = () => {
    cartItemDispatch(
      carttemsActions.addMeals({
        id: id,
        mealsTitle: title,
        mealsQuantity: 1,
        mealsPrice: +price,
        total: price,
      })
    );
  };

  
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button type="button" onClick={addMealsHandler}>
            Add to Cart
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
