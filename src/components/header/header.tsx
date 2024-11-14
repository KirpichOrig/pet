import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './header.css';

const Header: React.FC = () => {
  return (
    <header className="header section">
      <div className="logo">
        <Link href="/">
          <Image src="/images/logo/logo-b.png" alt="Логотип" width={133} height={50} />
        </Link>
      </div>
      <nav className="header-nav">
        <a href="#">каталог</a>
        <div className="header-nav-authorization">
          <Link href="/auth">
            <p>регистрация</p>
          </Link>
          <p>/</p>
          <a href="#">вход</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
