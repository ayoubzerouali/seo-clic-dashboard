import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem }
    from '@/components/ui/sidebar';
import { type NavGroup } from '@/types';
import { Link, usePage } from '@inertiajs/react';

export function NavMain({ items = [] }: { items: NavGroup[] }) {
    const page = usePage();
    return (
        <>
            {items.map((item) => (
                <SidebarGroup key={item.title} className="px-2 py-0">

                    <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
                    <SidebarMenu>
                        {item.items.map((link) => (
                            <SidebarMenuItem key={link.title}>
                                <SidebarMenuButton
                                    asChild isActive={link.href === page.url}
                                    tooltip={{ children: link.title }}
                                >
                                    <Link href={link.href} prefetch>
                                        {link.icon && <link.icon />}
                                        <span>{link.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>

            ))
            }
        </>
    );
}
