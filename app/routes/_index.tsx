import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="p-8 font-sans leading-relaxed">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome to Remix</h1>
      <ul className="space-y-2">
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
