import { useState } from "react";

// The form gets ONE prop from App: a function to call when bitly gives us a short link
interface ShortenFormProps {
  onShorten: (longUrl: string, shortUrl: string) => void;
}

export default function ShortenForm({ onShorten }: ShortenFormProps) {
  // 3 pieces of state
  const [url, setUrl] = useState("");               // what's typed in the box (controlled input)
  const [error, setError] = useState("");           // error message to show
  const [isLoading, setIsLoading] = useState(false); // true while we wait for bitly

  async function handleSubmit(event: React.FormEvent) {
    // stop the page from refreshing
    event.preventDefault();
    setError("");

    // check 1: empty box
    if (url.trim() === "") {
      setError("Please add a link");
      return;
    }
    // check 2: must start with http
    if (!url.startsWith("http")) {
      setError("Your link needs to start with http:// or https://");
      return;
    }

    setIsLoading(true);
    try {
      // Make an API call to bitly (the key comes from .env.local)
      const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_BITLY_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ long_url: url }),
      });

      if (!response.ok) {
        setError("Bitly couldn't shorten that link. Check it and try again.");
        return;
      }

      // get the short link from bitly's answer
      const responseData = await response.json();

      // hand it up to App, then clear the box
      onShorten(url, responseData.link);
      setUrl("");
    } catch {
      // network problem (no internet, bitly down, etc.)
      setError("Something went wrong. Please try again.");
    } finally {
      // runs no matter what: stop the loading state
      setIsLoading(false);
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Shorten a link here..."
          aria-label="Link to shorten"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Shortening..." : "Shorten It!"}
        </button>
      </form>
      <p id="errorMessage" role="alert">{error}</p>
    </section>
  );
}
