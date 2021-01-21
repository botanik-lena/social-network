import h from './Header.module.css';

const Header = () => {
    return (
        <header className={h.header}>
            <img src="https://upload-icon.s3.amazonaws.com/uploads/icons/png/20614657171553771421-512.png" alt="logo"/>
        </header>
    );
}

export default Header;