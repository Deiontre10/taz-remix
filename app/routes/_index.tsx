import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Taz Remix Portfolio" },
    { name: "description", content: "My portfolio in remix" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Hey Guys</h1>
      <p className="text-lg m-2">
        I am Taz, a full-stack developer and I love building things with Remix
      </p>
    </div>
  );
}
