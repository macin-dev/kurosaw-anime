import { useEffect, useRef, useState } from "react";
import Card from "./components/Card";
import Container from "./layouts/Container";
import Navbar from "./layouts/Nabvar";

export default function App() {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPage, setNextPage] = useState(1);

  const divRef = useRef(null);
  const observeRef = useRef(null);
  const isLoadingRef = useRef(false);
  const nextPageRef = useRef(1);
  const hasRequestedRef = useRef(false);

  useEffect(() => {
    isLoadingRef.current = isLoading;
  }, [isLoading]);

  useEffect(() => {
    nextPageRef.current = nextPage;
  }, [nextPage]);

  useEffect(() => {
    async function fetchAnime() {
      if (isLoadingRef.current) return;

      isLoadingRef.current = true;
      setIsLoading(true);

      try {
        console.log(nextPageRef.current);
        const resp = await fetch(
          `https://api.jikan.moe/v4/top/anime?page=${nextPageRef.current}`,
        );

        if (!resp.ok) throw new Error("Error fetching API");

        const { data } = await resp.json();

        setAnimeList((prevAnimeList) => [...prevAnimeList, ...data]);
        setNextPage((prevNextPage) => prevNextPage + 1);
      } catch (error) {
        console.error("An error courred", error);
      } finally {
        isLoadingRef.current = false;
        setIsLoading(false);
      }
    }

    observeRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry.isIntersecting) {
          hasRequestedRef.current = false;
          return;
        }

        if (hasRequestedRef.current || isLoadingRef.current) return;

        hasRequestedRef.current = true;
        fetchAnime();
      },
      { rootMargin: "50px" },
    );

    if (divRef.current) {
      observeRef.current.observe(divRef.current);
    }

    return () => {
      observeRef.current?.disconnect();
    };
  }, []);

  return (
    <section className="min-h-dvh">
      <Navbar />
      <Container>
        <main className="px-7 text-white xl:px-0">
          <section className="featured grid justify-items-center gap-3">
            {animeList.map((item) => (
              <Card
                key={item.mal_id}
                src={item.images.webp.image_url}
                title={item.title}
                year={item.year}
                genre={item.genres[0]?.type}
              />
            ))}
          </section>
          <div className="h-20" ref={divRef}>
            {isLoading && <p className="text-white">Loading more anime...</p>}
          </div>
        </main>
      </Container>
    </section>
  );
}
