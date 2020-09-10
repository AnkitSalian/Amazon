import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';
import './Header.css'

function Header() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="header">

            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" />
            </Link>

            <div className="header__search">

                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />

            </div>

            <div className="header__nav">

                <Link to="/login">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Guest</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingCartIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.reduce((val, obj) => val + (obj['count']), 0)}</span>
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Header
