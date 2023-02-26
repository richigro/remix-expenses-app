import { Outlet } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import marketingStyles from "~/styles/marketing.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: marketingStyles },
];

const MarketingLayout = () => {
  return <Outlet />;
};

export default MarketingLayout;
