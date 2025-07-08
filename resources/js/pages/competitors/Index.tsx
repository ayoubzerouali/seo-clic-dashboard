
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";

import { Head } from "@inertiajs/react";
import { CompetitorIntelligence } from "./Main";
// import { KeywordResultTabs } from "./sections/results";
// import { CompetitorAddBar } from "./sections/CompetitorAddBar";
// import { CompetitorStats } from "./sections/CompetitorStats";
// import { useState } from "react";


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Competitr Intelligence',
        href: '/dashboard/competitors-intelligence',
    },
];
export default function Competitors() {

    return (

        <AppLayout breadcrumbs={breadcrumbs}>

            <Head title="Keywords Research" />
            <div className="flex flex-col gap-6 p-2">

                <div className="py-2">
                    <h2 className="text-3xl font-bold tracking-tight">
                        Competitor Intelligence
                    </h2>
                    <p className="text-muted-foreground">
                        Monitor and analyze your competitors to gain strategic insights.
                    </p>
                </div>
                <CompetitorIntelligence />
                {/* <CompetitorAddBar /> */}
                {/* <CompetitorStats /> */}
            </div>
        </AppLayout>
    )
}
