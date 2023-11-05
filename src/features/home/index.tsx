import Link from "next/link";

export const HomePage = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="new">new(押下後にリロードで該当ページに遷移)</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>foo</h1>
        <div>
          <a href="/new">new</a>
        </div>
      </main>
    </div>
  );
};
