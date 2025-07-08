
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";

import { Head } from "@inertiajs/react";
import { Reports } from "./Main";


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Reports & Export',
        href: '/dashboard/reports',
    },
];
export default function ReportsPage() {

    return (

        <AppLayout breadcrumbs={breadcrumbs}>

            <Head title="Keywords Research" />
            <div className="flex flex-col gap-6 p-2">

                <div className="py-2">
                    <h2 className="text-3xl font-bold tracking-tight">
                        Reports & Export
                    </h2>
                    <p className="text-muted-foreground">
                        Generate and export reports of your SEO and lead generation data.
                    </p>
                </div>
                <Reports />
            </div>
        </AppLayout>
    )
}
