
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";

import { Head } from "@inertiajs/react";
import { LeadsManagement } from "./Main"
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Lead Management',
        href: '/dashboard/lead-management',
    },
];
export default function LeadGenerationPage() {

    return (

        <AppLayout breadcrumbs={breadcrumbs}>

            <Head title="Keywords Research" />
            <div className="flex flex-col gap-6 p-2">

                <div className="py-2">
                    <h2 className="text-3xl font-bold tracking-tight">
                        Leads Management
                    </h2>
                    <p className="text-muted-foreground">
                        Manage and track your leads in one place.
                    </p>
                </div>
                <LeadsManagement />
            </div>
        </AppLayout>
    )
}
