import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import tailwindStylesheetUrl from "./styles/tailwind.css?url";
import globalsStylesheetUrl from "./styles/globals.css?url";
import Header from "~/components/Header";
import circlesUrl from "./images/circles.png?url";
import faviconUrl from "./images/favicon.png?url";

export function links() {
  return [
    { rel: "icon", type: "image/png", href: faviconUrl },
    { rel: "stylesheet", href: globalsStylesheetUrl },
    { rel: "stylesheet", href: tailwindStylesheetUrl }
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={{
        backgroundColor: "#DBCDC2",
        backgroundImage: `url(${circlesUrl})`,
        backgroundRepeat: "repeat"
      }}>
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
