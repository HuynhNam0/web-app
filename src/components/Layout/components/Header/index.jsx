import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown, faCartShopping, faPhoneVolume, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import React, { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountItem from '../../../Accountitem';
import Cart from "~/components/Cart";

import Menu from '../../../Popper/Menu/index';

const cx = classNames.bind(styles);

function Header(props) {
    const { carts } = props;
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0);
    }, []);
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
                        <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                </div>
                <Tippy interactive render={attrs => (

                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            {/* <img src="https://dienmayabc.com/media/product/2250_sharp_sj_x176e_dss_1_org.jpg"/>
                            <h4 className={cx('search-title')}>Account</h4> */}
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper></div>

                )}>
                    <div className={cx('inputs-search')}>
                        <div className={cx('inputs')}>
                            <input type="text"></input>
                        </div>

                        {/* <Tippy content="Tìm kiếm" placement='right'> */}
                        <div className={cx('search')}>
                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                        </div>
                        {/* </Tippy> */}
                    </div>
                </Tippy>
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
                    <Menu />
                </div>
                <div className={cx('callPhone')}>
                    <div className={cx('tellPhone')}>
                        {/* <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> */}
                        <button onClick={() => setIsOpenModal(!isOpenModal)}>
                            {" "}
                            <FontAwesomeIcon
                                icon={faCartShopping}
                                fontSize={20}
                                color="white"
                                background="#dc3545"
                            />{" "}
                            <span> {carts} </span>{" "}
                        </button>
                        {isOpenModal && <Cart />}{" "}
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
