import styles from './Cart.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Cart() {
    return (
        <div className={cx('cart')}>
            Cart
        </div>
    );
}

export default Cart;
