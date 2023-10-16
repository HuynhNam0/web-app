
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import MenuItem from '../../MenuItem';
import { Wrapper as PopperWrapper } from '~/components/Popper'

const cx = classNames.bind(styles);
function Menu() {
    return (
        <div className={cx('menu-list')}>
            <Tippy interactive render={attrs => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {/* <img src="https://dienmayabc.com/media/product/2250_sharp_sj_x176e_dss_1_org.jpg"/>
                            <h4 className={cx('search-title')}>Account</h4> */}
                        <MenuItem />
                    </PopperWrapper>
                </div>
            )}>
                <div className={cx('hotline-phone')}>
                    <div className={cx('hotline')}>
                        Tài khoảng
                    </div>
                    <div className={cx('phone')}>
                        Hello, khách
                    </div>
                </div>
            </Tippy>
        </div>
    )
}

export default Menu;