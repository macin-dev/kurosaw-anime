const links = ["catalog", "news", "collections"];

export default function LinkList() {
  const linkItems = links.map((li) => <Link key={li} text={li} />);

  return <ul>{linkItems}</ul>;
}

function Link({ text, ref = "#" }) {
  return (
    <li>
      <a
        className="border-b-border-divider block border-b px-7 py-2.5 text-white capitalize"
        href={ref}
      >
        {text}
      </a>
    </li>
  );
}
