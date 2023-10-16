import styles from './LogIn.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function LogIn() {
    return (
        <div className={cx('logIn')}>
            logIn
        </div>
    );
}

export default LogIn;