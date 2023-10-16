import classNames from "classnames/bind"
import styles from "./MenuItem.module.scss"

const cx = classNames.bind(styles)
function MenuItem() {
    return (
        <div className={cx('menu_list')}>
            <div className={cx('login')}>Đăng nhập</div>
            <div className={cx('logup')}>Đăng Ký</div>
            <div className={cx('favourite')}>Yêu thích (0)</div>
            <div className={cx('see')}>Đã xem (0)</div>
        </div>
    );
}
export default MenuItem;