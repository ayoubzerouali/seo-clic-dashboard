
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem, Keyword } from "@/types";

import { Head } from "@inertiajs/react";
// import { KeywordResultTabs } from "./sections/results";
import { SeoAnalysisBar } from "./sections/SeoAnalysisBar";
import { SeoResult } from "./sections/SeoResult";
import { useState } from "react";


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'SEO Audit',
        href: '/dashboard/seo-audit',
    },
];
export default function Keywords({ seo }: { seo: Keyword[] }) {

    const [isAnalyzed, setIsAnalyzed] = useState(false);
    const handleAnalysisComplete = () => {
        setIsAnalyzed(true);
    };
    return (

        <AppLayout breadcrumbs={breadcrumbs}>

            <Head title="Keywords Research" />
            <div className="flex flex-col gap-6 p-2">

                <div className="py-2">
                    <h2 className="text-3xl font-bold tracking-tight">SEO Audit</h2>
                    <p className="text-muted-foreground">
                        Analyze and optimize your website for search engines.
                    </p>
                </div>

                <SeoAnalysisBar onAnalysisComplete={handleAnalysisComplete} />
                {isAnalyzed && (
                    <SeoResult />
                )}
            </div>
        </AppLayout>
    )
}
