import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress";
import { Globe } from "lucide-react"
import { useState } from "react";

export function SeoAnalysisBar({ onAnalysisComplete }) {
    const [url, setUrl] = useState("");
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (url) {
            setIsAnalyzing(true);
            setTimeout(() => {
                setIsAnalyzing(false);
                onAnalysisComplete();
            }, 2000);
        }
    };
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Website Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <div className="relative flex-1">
                                <Globe className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="url"
                                    placeholder="Enter your website URL..."
                                    className="pl-8"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    required
                                />
                            </div>
                            <Button type="submit" disabled={isAnalyzing}>
                                {isAnalyzing ? "Analyzing..." : "Analyze Site"}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>

            {isAnalyzing && (
                <Card>
                    <CardContent className="pt-6">
                        <div className="space-y-2 text-center">
                            <h3 className="text-lg font-medium">Analyzing your website...</h3>
                            <Progress value={45} className="h-2 w-full" />
                            <p className="text-sm text-muted-foreground">
                                This may take a minute. We're checking SEO factors, page speed, and more.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            )}
        </>
    )
}
