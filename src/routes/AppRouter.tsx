import { Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import { Loader2 } from "lucide-react";
import React from "react";
import Layout from "../shared/layout/Layout";

const LoadingFallback = () => <div className="min-w-screen min-h-screen bg-gray-100/70  flex justify-center items-center">
    <Loader2 className="animate-spin text-green-500" />
</div>;

const Home = React.lazy(() => import("../features/home/Home"));
const About = React.lazy(() => import("../features/about/About"));
const Promotors = React.lazy(() => import("../features/promotors/Promotors"));
const Campaign = React.lazy(() => import("../features/campaign/Campaign"));

const withSuspense = (Component: React.ReactNode) => (
    <Suspense fallback={<LoadingFallback />}>{Component}</Suspense>
);

export const AppRouter: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        errorElement: <div>Ocurrio un error</div>,
        children: [
            {
                index: true,
                element: withSuspense(<Home />),
            },
            {
                path: "about",
                element: withSuspense(<About />),
            },
            {
                path: "promotors",
                element: withSuspense(<Promotors />),
            },
                        {
                path: "campaign",
                element: withSuspense(<Campaign />),
            },
        ],
    },
];