
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Download, Filter, Search } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
export function KeywordSearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [difficultyRange, setDifficultyRange] = useState([0, 100]);
    const [volumeRange, setVolumeRange] = useState([0, 15000]);
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Implement search functionality
    };
    return (
        <Card>
            <CardHeader>
                <CardTitle>Keyword Discovery</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSearch} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <div className="relative flex-1">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4
                                    text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Enter a keyword or topic..."
                                className="pl-8"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <Button type="submit">
                            Search
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">
                                    <Filter className="mr-2 h-4 w-4" />
                                    Filters
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>Difficulty</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <div className="px-2 py-2">
                                    <Slider
                                        value={difficultyRange}
                                        min={0}
                                        max={100}
                                        step={1}
                                        onValueChange={setDifficultyRange}
                                        className="py-4"
                                    />
                                    <div className="flex justify-between text-xs
                                            text-muted-foreground">
                                        <span>{difficultyRange[0]}</span>
                                        <span>{difficultyRange[1]}</span>
                                    </div>
                                </div>
                                <DropdownMenuLabel>Volume</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <div className="px-2 py-2">
                                    <Slider
                                        value={volumeRange}
                                        min={0}
                                        max={15000}
                                        step={100}
                                        onValueChange={setVolumeRange}
                                        className="py-4"
                                    />
                                    <div className="flex justify-between text-xs
                                            text-muted-foreground">
                                        <span>{volumeRange[0]}</span>
                                        <span>{volumeRange[1]}</span>
                                    </div>
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button variant="outline">
                            <Download className="mr-2 h-4 w-4" />
                            Export
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}
