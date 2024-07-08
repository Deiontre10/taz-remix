import type { MetaFunction } from "@remix-run/node";

import About from "~/components/About";
import Terminal from "~/components/Terminal";

export const meta: MetaFunction = () => {
  return [
    { title: "Taz Remix Portfolio" },
    { name: "description", content: "My portfolio in remix" },
  ];
};

export default function Index() {
  return (
    <div className="grid pt-4 pb-8 xl:pb-4 min-h-[calc(100vh-64px)] gap-x-8 gap-y-8 xl:grid-cols-3 items-center justify-center justify-items-center">
      <About />
      <Terminal />
    </div>
  );
}
