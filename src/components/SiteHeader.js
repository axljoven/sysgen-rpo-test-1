import React from 'react';
import Logo from './Logo';
import SiteNav from './SiteNav';

const SiteHeader = () => {
    return (
        <header id="site-header" className="site-header">
            <div className="container mx-auto px-8">
                <Logo />
                <SiteNav />
            </div>
        </header>
    )
}

export default SiteHeader;