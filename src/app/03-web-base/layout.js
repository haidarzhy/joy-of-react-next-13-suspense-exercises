import React from 'react';
import {Kanit} from 'next/font/google';

import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import './styles.css';
import {getNavLinks} from "@/helpers/web-base-helpers";

const primaryFont = Kanit({
    weight: ['300', '500'],
    subsets: ['latin'],
});

function WebBaseLayout({children}) {
    let navLinks = getNavLinks();
    return (
        <div
            className="web-base"
            style={{
                '--font-family-primary':
                primaryFont.style.fontFamily,
            }}
        >
            <SiteHeader navLinks={navLinks}/>
            <main>{children}</main>
            <SiteFooter navLinks={navLinks}/>
        </div>
    );
}

export default WebBaseLayout;
