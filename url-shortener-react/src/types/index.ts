// The shape of one shortened link in our list
export interface ShortLink {
  id: string;       // unique id, used as the React key
  longUrl: string;  // the link the user typed
  shortUrl: string; // the bitly link we got back
}
