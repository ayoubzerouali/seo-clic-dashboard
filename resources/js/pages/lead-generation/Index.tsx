
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";

import { Head } from "@inertiajs/react";
import { LeadGeneration } from "./Main";



const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Lead Generation',
        href: '/dashboard/lead-generation',
    },
];
export default function LeadGenerationPage() {

    return (

        <AppLayout breadcrumbs={breadcrumbs}>

            <Head title="Keywords Research" />
            <div className="flex flex-col gap-6 p-2">

                <div className="py-2">
                    <h2 className="text-3xl font-bold tracking-tight">
                        Lead Generation
                    </h2>
                    <p className="text-muted-foreground">
                        Find and collect leads for your business.

                    </p>
                </div>
                <LeadGeneration />
            </div>
        </AppLayout>
    )
}
