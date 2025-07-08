
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem, Keyword } from "@/types";

import { Head } from "@inertiajs/react";
import { KeywordResultTabs } from "./sections/results";
import { KeywordSearchBar } from "./sections/KeywordSearchBar";


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Keyword Analysis',
        href: '/dashboard/keywords',
    },
];
export default function Keywords({ keywords }: { keywords: Keyword[] }) {
    console.log(keywords)
    return (

        <AppLayout breadcrumbs={breadcrumbs}>

            <Head title="Keywords Research" />
            <div className="flex flex-col gap-6 p-2">

                <div className="py-2">
                    <h2 className="text-3xl font-bold tracking-tight">Keyword Research</h2>
                    <p className="text-muted-foreground">
                        Find valuable keywords for your website.
                    </p>
                </div>

                <KeywordSearchBar />
                <KeywordResultTabs keywords={keywords} />
            </div>
        </AppLayout>
    )
}
