import { NavLinks } from "./nav-links.model";

export const NAV_LINKS_MAIN: NavLinks[] = [
    { path: '/new-world', label: 'New World' },
    { path: '/thrones-liberty', label: 'Thrones & Liberty' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/news', label: 'News' },
];

export const NAV_LINKS_NEW_WORLD: NavLinks[] = [
    { path: '/new-world', label: 'Logo NW' },
    { path: '/new-world/companies', label: 'Companies', icon: 'building'},
    { path: '/new-world/wars', label: 'Wars', icon: 'sword'},
    { path: '/new-world/servers', label: 'Servers', icon: 'server'},
    { path: '/new-world/forum', label: 'Forum', icon: 'comments'},
];

export const COMPANY_LINKS_NEW_WORLD = (companyId: number): NavLinks[] => [
    {
        label: 'Overview',
        path: `/new-world/companies/${companyId}`,
        icon: 'home'
    },
    {
        label: 'Members',
        path: `/new-world/companies/${companyId}/members`,
        icon: 'users'
    },
    {
        label: 'Wars',
        path: `/new-world/companies/${companyId}/wars`,
        icon: 'sword'
    },
    {
        label: 'Roster',
        path: `/new-world/companies/${companyId}/roster`,
        icon: 'list'
    }
];

export const NAV_LINKS_THRONES_LIBERTY: NavLinks[] = [
    { path: '/thrones-liberty', label: 'LOGO TL' },
    { path: '/thrones-liberty/guilds', label: 'Guilds'},
    { path: '/thrones-liberty/events', label: 'Events'},
    { path: '/thrones-liberty/auctions', label: 'Auctions'},
];

export const USER_LINKS_NEW_WORLD: NavLinks[] = [
    { path: '/new-world/characters', label: 'My Characters', icon: 'user'},
    { path: '/new-world/my-company', label: 'My Company', icon: 'users'},
];

export const USER_LINKS_THRONES_LIBERTY: NavLinks[] = [
    { path: '/thrones-liberty/characters', label: 'My Characters'},
    { path: '/thrones-liberty/my-guild', label: 'My Guild'},
];
