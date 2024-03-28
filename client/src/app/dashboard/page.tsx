"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import Image from "next/image";
import {
  BarChart,
  CurvedlineChart,
  GroupedbarChart,
  LineChart,
  PieChart,
} from "@/components/constants/graphs";
import {
  BellIcon,
  CalendarClockIcon,
  HomeIcon,
  LineChartIcon,
  Package2Icon,
  SearchIcon,
  ShoppingCartIcon,
} from "@/components/constants/icons";
import { ArrowBottomLeftIcon } from "@radix-ui/react-icons";
import NewsFeed from "@/components/NewsFeed";
import { useEffect, useState } from "react";
import { SheetDemo } from "@/components/sheet/sheet";
export default function DashBoard() {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([
    {
      id: 0,
      title: "",
    },
  ]);

  useEffect(() => {
    setTimeout(() => {
      const newsData = [
        { id: 1, title: "Breaking News 1" },
        { id: 2, title: "Breaking News 2" },
        { id: 3, title: "Breaking News 3" },
      ];
      setNews(newsData);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        // Skeleton loading animation
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
          {/* Sidebar Skeleton */}
          <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-[60px] items-center border-b px-6">
                <Skeleton className="w-16 h-6" />
                <Skeleton className="ml-auto h-8 w-8" />
              </div>
              <div className="flex-1 overflow-auto py-2">
                <nav className="grid items-start px-4 text-sm font-medium">
                  <Skeleton className="h-8 w-16" />
                  <Skeleton className="h-8 w-16" />
                  <Skeleton className="h-8 w-16" />
                </nav>
                <div className="mt-4 px-4">
                  <Skeleton className="w-full h-64" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
              <Skeleton className="w-6 h-6 lg:hidden" />
              <div className="w-full flex-1">
                <Skeleton className="w-full h-10" />
              </div>
              <Skeleton className="w-8 h-8" />
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
              <Skeleton className="w-12 h-6" />
              <div className="flex items-center gap-4">
                <Skeleton className="w-8 h-8" />
                <Skeleton className="w-36 h-6" />
                <div className="ml-auto flex items-center gap-2">
                  <Skeleton className="w-20 h-8 hidden sm:flex" />
                  <Skeleton className="w-24 h-8 hidden md:flex" />
                  <Skeleton className="w-[280px] h-8" />
                </div>
              </div>
              {[1, 2, 3, 4, 5].map((index) => (
                <Card key={index}>
                  <CardHeader>
                    <Skeleton className="w-32 h-6" />
                    <Skeleton className="w-24 h-4" />
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <Skeleton className="w-full h-60" />
                  </CardContent>
                </Card>
              ))}
            </main>
          </div>
        </div>
      ) : (
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
          <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-[60px] items-center border-b px-6">
                <Link
                  className="flex items-center gap-2 font-semibold"
                  href="#"
                >
                  <Package2Icon className="h-6 w-6" />
                  <span className="">Acme Inc</span>
                </Link>
                <Button
                  className="ml-auto h-8 w-8"
                  size="icon"
                  variant="outline"
                >
                  <BellIcon className="h-4 w-4" />
                  <span className="sr-only">Toggle notifications</span>
                </Button>
              </div>
              <div className="flex-1 overflow-auto py-2">
                <nav className="grid items-start px-4 text-sm font-medium">
                  <Link
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <HomeIcon className="h-4 w-4" />
                    Home
                  </Link>
                  <Link
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <ShoppingCartIcon className="h-4 w-4" />
                    <SheetDemo/>
                  </Link>
                  <Link
                    className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                    href="#"
                  >
                    <LineChartIcon className="h-4 w-4" />
                    Analytics
                  </Link>
                </nav>
                <div className="mt-4 px-4">
                  <NewsFeed news={news} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
              <Link className="lg:hidden" href="#">
                <Package2Icon className="h-6 w-6" />
                <span className="sr-only">Home</span>
              </Link>
              <div className="w-full flex-1">
                <form>
                  <div className="relative">
                    <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <Input
                      className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </form>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                    size="icon"
                    variant="ghost"
                  >
                    <Image
                      alt="Avatar"
                      className="rounded-full"
                      height="32"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "32/32",
                        objectFit: "cover",
                      }}
                      width="32"
                    />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem><SheetDemo/></DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 w-[90%] m-[auto]">
              <div className="flex items-center gap-4">
                <Button size="icon" variant="outline">
                  <ArrowBottomLeftIcon className="h-4 w-4" />
                  <span className="sr-only">Back</span>
                </Button>
                <h1 className="font-semibold text-lg md:text-xl">Analytics</h1>
                <div className="ml-auto flex items-center gap-2">
                  <Button className="hidden sm:flex" variant="outline">
                    Today
                  </Button>
                  <Button className="hidden md:flex" variant="outline">
                    This Month
                  </Button>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        className="w-[280px] justify-start text-left font-normal"
                        id="date"
                        variant="outline"
                      >
                        <CalendarClockIcon className="mr-2 h-4 w-4" />
                        June 01, 2023 - June 30, 2023
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent align="end" className="w-auto p-0">
                      <Calendar initialFocus mode="range" numberOfMonths={2} />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <div className="sm:grid grid-cols-2 gap-4 flex flex-col">
                <Card>
                  <CardHeader>
                    <CardTitle>Net Sales</CardTitle>
                    <CardDescription>Monthly net sales</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <GroupedbarChart className="w-full aspect-[2/1]" />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Gross Profit</CardTitle>
                    <CardDescription>Monthly gross profit</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center flex-row">
                    <LineChart className="w-full aspect-[2/1]" />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Gross Margin</CardTitle>
                    <CardDescription>Monthly gross margin</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <CurvedlineChart className="w-full aspect-[2/1]" />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Visitors</CardTitle>
                    <CardDescription>Monthly visitors</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <BarChart className="w-full aspect-[2/1]" />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Page Views</CardTitle>
                    <CardDescription>Monthly page views</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <PieChart className="w-full aspect-[2/1]" />
                  </CardContent>
                </Card>
              </div>
            </main>
          </div>
        </div>
      )}
    </>
  );
}
