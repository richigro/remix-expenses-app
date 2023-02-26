import { Outlet } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import marketingStyles from "~/styles/marketing.css";

import MainHeader from "~/components/navigation/MainHeader";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: marketingStyles },
];

const MarketingLayout = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
};

export default MarketingLayout;
