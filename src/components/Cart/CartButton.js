import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const { totalQuantity } = useSelector((state) => state.cart);
  const toggleHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
