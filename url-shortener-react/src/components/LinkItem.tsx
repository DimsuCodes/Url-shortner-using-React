import { useState } from "react";
import type { ShortLink } from "../types";

interface LinkItemProps {
  link: ShortLink;
}

export default function LinkItem({ link }: LinkItemProps) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(link.shortUrl);
    setCopied(true);
  }

  return (
    <li>
      <div>{link.longUrl}</div>
      <div>{link.shortUrl}</div>
      <button onClick={handleCopy}>{copied ? "Copied!" : "Copy"}</button>
    </li>
  );
}