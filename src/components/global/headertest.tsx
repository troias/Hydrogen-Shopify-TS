import React from 'react'
import { useWindowScroll } from 'react-use'
import { EnhancedMenu } from '../../lib/utils'
import { Heading, IconAccount, IconBag, IconMenu, IconSearch, Input } from '../'
import { CartBadge } from './Header.client'
import { Link } from '@shopify/hydrogen'


function DesktopHeader({
    countryCode,
    isHome,
    menu,
    openCart,
    title,
}: {
    countryCode?: string | null
    isHome: boolean
    openCart: () => void
    menu?: EnhancedMenu
    title: string
}) {
    const { y } = useWindowScroll()

    const styles = {
        button:
            'relative flex items-center justify-center w-8 h-8 focus:ring-primary/5',
        container: `${isHome
            ? 'bg-primary/80 dark:bg-contrast/60 text-contrast dark:text-primary shadow-darkHeader'
            : 'bg-contrast/80 text-primary'
            } ${y > 50 && !isHome ? 'shadow-lightHeader ' : ''
            }hidden h-nav lg:flex items-center sticky transition duration-300 backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-8 px-12 py-8`,
    }

    return (
        <section className="">
            <header role="banner" className={styles.container}>
                <div>
                    <Link className={`font-bold`} to="/">
                        {title}
                    </Link>
                </div>
                <div className="flex gap-12">

                    <nav className="flex gap-8">

                        {(menu?.items || []).map((item) => (
                            <Link key={item.id} to={item.to} target={item.target}>
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="flex items-center gap-1">
                    <form
                        action={`/${countryCode ? countryCode + '/' : ''}search`}
                        className="flex items-center gap-2"
                    >
                        <Input
                            className={
                                isHome
                                    ? 'focus:border-contrast/20 dark:focus:border-primary/20'
                                    : 'focus:border-primary/20'
                            }
                            type="search"
                            variant="minisearch"
                            placeholder="Search"
                            name="q"
                        />
                        <button type="submit" className={styles.button}>
                            <IconSearch />
                        </button>
                    </form>
                    <Link to={'/account'} className={styles.button}>
                        <IconAccount />
                    </Link>
                    <button onClick={openCart} className={styles.button}>
                        <IconBag />
                        <CartBadge dark={isHome} />
                    </button>
                </div>
            </header>
        </section>
    )
}

export default DesktopHeader