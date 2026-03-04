const links = ["Home", "catalog", "news", "collections"];

export default function NavLink() {
  const linkList = links.map((el) => <Link key={el} text={el} ref="#" />);

  return <ul className="hidden lg:inline-flex lg:gap-5">{linkList}</ul>;
}

function Link({ text, ref = "#" }) {
  return (
    <li>
      <a
        className="text-search-placeholder px-1 py-0.5 text-sm capitalize hover:text-white"
        href={ref}
      >
        {text}
      </a>
    </li>
  );
}
