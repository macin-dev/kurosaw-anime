export default function Card({ src, title, year, genre }) {
  return (
    <div className="relative aspect-3/4 overflow-hidden rounded-xl">
      <div className="absolute inset-0 z-10 bg-linear-to-t from-black/80 via-black/10 to-transparent"></div>
      <img className="h-full w-full object-cover" src={src} alt={title} />
      <div className="absolute bottom-0 left-0 z-20 pb-3 pl-3">
        <h2 className="text-sm text-white">{title}</h2>
        <div className="text-search-placeholder text-xs">
          <span>
            {year}, {genre}
          </span>
        </div>
      </div>
    </div>
  );
}
