import Link from 'next/link';

type HeaderProps = {
    links: HeaderLink[];
}

export interface HeaderLink {
    title: string,
    link: string,
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    return (
        <nav>
            {
                props.links.map((element) => {
                    return <Link href={element.link}>{element.title}</Link>
                })
            }
        </nav>
    );
}