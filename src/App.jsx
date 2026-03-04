import Container from "./layouts/Container";
import Navbar from "./layouts/Nabvar";

export default function App() {
  return (
    <section className="min-h-dvh">
      <Navbar />
      <Container>
        <main className="px-7 text-white xl:px-0">Welcome!</main>
      </Container>
    </section>
  );
}
