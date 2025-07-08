
import { NavGroup, type NavItem } from '@/types';
import { BookOpen, ChartPie, FileSearch, Folder, LayoutGrid, Search, Sheet, ShoppingBag, UserPlus, Users } from 'lucide-react';

export const mainNavItems: NavGroup[] = [
    {
        title: "SEO TOOLS",
        items: [
            {
                title: 'Dashboard',
                href: '/dashboard',
                icon: LayoutGrid,
            },
            {
                title: 'Keyword Research',
                href: '/keyword-research',
                icon: Search,
            },
            {
                title: 'SEO Audit',
                href: '/seo-audit',
                icon: FileSearch,
            },

            // {
            //     title: 'Product Optimization',
            //     href: '/product-optimization',
            //     icon: ShoppingBag,
            // },

            {
                title: 'Competitor Intelligence',
                href: '/competitor-intelligence',
                icon: Users,
            },

            {
                title: 'Lead Generation',
                href: '/lead-generation',
                icon: UserPlus,
            },
            {
                title: 'Lead Management',
                href: '/lead-management',
                icon: ChartPie,
            }, {
                title: 'Reports & Export',
                href: '/reports',
                icon: Sheet,
            },


        ]
    }
];

export const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];
