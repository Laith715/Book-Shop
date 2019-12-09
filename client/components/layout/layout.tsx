import React from 'react';
import { Header, HeaderLink } from './header';
import Footer from './footer';

interface Props { }

const Layout: React.FC<Props> = props => {
    const headerLinks = [
        {
            title: 'Cart',
            link: '/shop/cart'
        },
        {
            title: 'BookShop',
            link: '/shop'
        },
    ] as HeaderLink[];

    return (
        <>
            <Header links={headerLinks}></Header>
            {
                props.children
            }
            <Footer></Footer>
        </>
    );
}
export default Layout;

