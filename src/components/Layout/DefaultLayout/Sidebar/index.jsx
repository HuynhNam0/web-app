import { BsFillDisplayFill } from 'react-icons/bs';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import logo from '~/assets/images/tivi.jpeg'
import logo1 from '~/assets/images/tulanh.webp'
import logo2 from '~/assets/images/maylanh.jpeg'
import logo3 from '~/assets/images/maygiat.jpeg'
import logo4 from '~/assets/images/maygiat.jpeg'
import logo5 from '~/assets/images/loa.jpeg'
import logo6 from '~/assets/images/tudong.jpeg'
import logo7 from '~/assets/images/maylockhongkhi.jpeg'
import logo8 from '~/assets/images/vanphong.jpeg'

const cx = classNames.bind(styles)
function Sidebar() {
    return (
        <sidebar className={cx('wrapper')}>
            <ul className={cx('icons')}>
                <li className={cx('icon')}>
                    <div className={cx('img')}>
                        <img src={logo}/>
                    </div>
                    <div className={cx('title')}>
                        Tivi
                    </div>
                </li>
                <li className={cx('icon')}>
                    <div className={cx('img')}>
                        <img src={logo1}/>
                    </div>
                    <div className={cx('title')}>
                        Tủ Lạnh
                    </div>
                </li>
                <li className={cx('icon')}>
                    <div className={cx('img')}>
                          <img src={logo2}/>
                    </div>
                    <div className={cx('title')}>
                         Máy lạnh
                    </div>
                </li>
                <li className={cx('icon')}>
                    <div className={cx('img')}>
                          <img src={logo3}/>
                    </div>
                    <div className={cx('title')}>
                        Máy giặt
                    </div>
                </li>
                <li className={cx('icon')}>
                    <div className={cx('img')}>
                          <img src={logo4}/>
                    </div>
                    <div className={cx('title')}>
                        Gia dụng
                    </div>
                </li>
                <li className={cx('icon')}>
                    <div className={cx('img')}>
                          <img src={logo5}/>
                    </div>
                    <div className={cx('title')}>
                        Loa
                    </div>
                </li>
                <li className={cx('icon')}>
                    <div className={cx('img')}>
                          <img src={logo6}/>
                    </div>
                    <div className={cx('title')}>
                        Tủ đông
                    </div>
                </li>
                <li className={cx('icon')}>
                    <div className={cx('img')}>
                          <img src={logo7}/>
                    </div>
                    <div className={cx('title')}>
                        Máy lọc không khí
                    </div>
                </li>
                <li className={cx('icon')}>
                    <div className={cx('img')}>
                          <img src={logo8}/>
                    </div>
                    <div className={cx('title')}>
                        Văn phòng
                    </div>
                </li>
            </ul>
        </sidebar>
    );
}

export default Sidebar;
