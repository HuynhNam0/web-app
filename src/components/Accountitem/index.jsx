import classNames from "classnames/bind"
import styles from "./Accountitem.module.scss"

const cx = classNames.bind(styles)
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('image')} src="https://bizweb.dktcdn.net/thumb/large/100/480/314/products/1-a45be786-ac3c-4560-a409-584ec8362275.jpg?v=1681404292340" alt="Tủ lạnh" />
            <div className={cx('content')}>
               <div className={cx('title')}>Tủ lạnh Electrolux Inverter 335 lít EBB3702K-A</div>
                <div className={cx('money')}>10.490.000đ</div>
            </div>
             <img className={cx('image')} src="https://bizweb.dktcdn.net/thumb/large/100/480/314/products/1-a45be786-ac3c-4560-a409-584ec8362275.jpg?v=1681404292340" alt="Tủ lạnh" />
            <div className={cx('content')}>
               <div className={cx('title')}>Tủ lạnh Electrolux Inverter 335 lít EBB3702K-A</div>
                <div className={cx('money')}>11.490.000đ</div>
             </div>
        </div>
    );
}
export default AccountItem;