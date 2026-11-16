import { useLocalStorage } from './hooks/useLocalStorage';
import Boost from "./components/Boost";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ShortenForm from "./components/ShortenedForm";
import type { ShortLink } from "./types";

function App() {
  const [links, setLinks] = useLocalStorage<ShortLink[]>("shortenedUrls", []);

  // called by ShortenForm when bitly sends back a short link
  function addLink(longUrl: string, shortUrl: string) {
    // ...links copies the old list, then we add the new one (immutable update)
    setLinks([...links, { id: crypto.randomUUID(), longUrl, shortUrl }]);
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ShortenForm onShorten={addLink} />

        {/* the list of links (Part 3 turns each one into its own component with a copy button) */}
        <section>
          <ul id="urlList">
            {links.map((link) => (
              <li key={link.id}>
                <div>{link.longUrl}</div>
                <div>{link.shortUrl}</div>
              </li>
            ))}
          </ul>
        </section>
            
        <Features />
        <Boost title="Boost Your Links Today" />
      </main>
      <Footer />
    </>
  );
}

export default App;
