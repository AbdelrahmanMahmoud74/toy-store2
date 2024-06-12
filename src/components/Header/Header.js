import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <Link to="/">تكامل الرؤي</Link>
                </div>
                <nav className="navigation">
                    <ul>
                        <li><Link to="/">الرئيسية</Link></li>
                        <li><Link to="/about">عن الشركة</Link></li>
                        <li><Link to="/vision">الرؤية والرسالة</Link></li>
                        <li><Link to="/products">المنتجات </Link></li>
                        <li><Link to="/contact">الاتصال بنا </Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
