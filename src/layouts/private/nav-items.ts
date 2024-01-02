export type NavItem = {
    label: string
    path: string
    allowedRoles: number[]
}

const commonNavItems: NavItem[] = [
    {
        label: 'Raport',
        path: '/',
        allowedRoles: [2],
    },
    {
        label: 'Istoric',
        path: '/worker-history',
        allowedRoles: [2],
    }
]

const adminNavItems: NavItem[] = [
    {
        label: 'Programari',
        path: '/appointments',
        allowedRoles: [1],
    },
    {
        label: 'Clienti',
        path: '/clienti',
        allowedRoles: [1],
    },
    {
        label: 'Piese Auto',
        path: '/piese-auto',
        allowedRoles: [1],
    },
    {
        label: 'Masini',
        path: '/cars',
        allowedRoles: [1],
    },
    {
        label: 'Lucratori',
        path: '/workers',
        allowedRoles: [1],
    },
    {
        label: 'Facturi',
        path: '/invoices',
        allowedRoles: [1],
    },
]

export const defaultNavItems: NavItem[] = [
    ...commonNavItems,
    ...adminNavItems,
]

export const generateRoleSpecificNavItems = (defaultNavItems: NavItem[]) => {
    const adminNavItems = defaultNavItems
        .filter((item) => item.allowedRoles.includes(1))
        .map((item) => ({ ...item, allowedRoles: [1] }));

    const endUserNavItems = defaultNavItems
        .filter((item) => item.allowedRoles.includes(2))
        .map((item) => ({ ...item, allowedRoles: [2] }));

    return {
        adminNavItems,
        endUserNavItems,
    };
};
