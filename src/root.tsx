import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "remix";
import type {MetaFunction} from "remix";

export const meta: MetaFunction = () => {
    return {title: "Remix Starter"};
};

export default function App() {
    return (
        <html lang="en" suppressHydrationWarning={true}>
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <Meta/>
            <Links/>
            <title/>
        </head>
        <body>
        <Outlet/>
        <ScrollRestoration/>
        <Scripts/>
        <LiveReload/>
        </body>
        </html>
    );
}


export function ErrorBoundary({error}: any) {
    console.error(error);
    return (
        <html>
        <head>
            <title>Oh no!</title>
            <Meta/>
            <Links/>
        </head>
        <body>
        Error handle
        <Scripts/>
        </body>
        </html>
    );
}


