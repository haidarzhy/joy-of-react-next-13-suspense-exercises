import React from 'react';
import Link from 'next/link';

import {getNavLinks} from '@/helpers/web-base-helpers';

async function CMSLinks({links}) {
    if (links.status === 'pending') {
        throw navLinks;
    }

    const fullfilledNavLinks = await links;

    // Only show the first 4 links in the header.
    const fourLinks = fullfilledNavLinks.slice(0, 4);
    return (
        <>
            {fourLinks.map(
                ({slug, label, href, type}) => (
                    <li key={slug}>
                        <Link
                            href={href}
                            className={`header-nav-link ${type}`}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
        </>
    )
}

async function SiteHeader({navLinks}) {
    return (
        <header className="site-header">
            <Link href="" className="logo">
                WebBase
            </Link>
            <nav>
                <ol className="header-nav-links">
                    <React.Suspense>
                        <CMSLinks links={navLinks}/>
                    </React.Suspense>
                </ol>
            </nav>
        </header>
    );
}

export default SiteHeader;
