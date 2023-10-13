import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown, faCartShopping, faPhoneVolume, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img
                        className={cx('header-imgage')}
                        src="https://bizweb.dktcdn.net/100/480/314/themes/899828/assets/logo.png?1695116819062"
                    />
                </div>{' '}
                <div className={cx('contact')}>
                    <div className={cx('lists-contact')}>
                         <div className={cx('list-contact')}>
                            Hệ thống cửa hàng
                         </div>
                         <div className={cx('list-contact')}>
                            40 cửa hàng
                         </div>
                    </div>
                    <div className={cx('icon-contact')}>
                        <FontAwesomeIcon icon={faCaretDown}/>
                    </div>
                </div>
                <div className={cx('inputs-search')}>
                    <div className={cx('inputs')}>
                        <input type="text"></input>
                    </div>
                    <div className={cx('search')}>
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </div>
                </div>
                <div className={cx('orderHistory')}>
                    <div className={cx('list-orderHistory')}>
                        Lịch sử đơn hàng
                    </div>
                </div>
                <div className={cx('callPhone')}>
                    <div className={cx('tellPhone')}>
                        <FontAwesomeIcon icon={faPhoneVolume}></FontAwesomeIcon>
                    </div>
                    <div className={cx('hotline-phone')}>
                        <div className={cx('hotline')}>
                          Hotline
                        </div>
                        <div className={cx('phone')}>
                          0335754550
                        </div>
                    </div>
                </div>
                 <div className={cx('callPhone')}>
                    <div className={cx('tellPhone')}>
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    </div>
                    <div className={cx('hotline-phone')}>
                        <div className={cx('hotline')}>
                           Tài khoảng
                        </div>
                        <div className={cx('phone')}>
                          Hello, khách
                        </div>
                    </div>
                </div>
                 <div className={cx('callPhone')}>
                    <div className={cx('tellPhone')}>
                        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                    </div>
                    <div className={cx('hotline-phone')}>
                        <div className={cx('hotline')}>
                          Giỏ hàng
                        </div>
                        <div className={cx('phone')}>
                          Thanh toán
                        </div>
                    </div>
                </div>
            </div>{' '}
        </header>
    );
}

export default Header;
