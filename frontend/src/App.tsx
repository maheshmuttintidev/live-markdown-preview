import React, { useState, useEffect } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import Logo from "/logo.webp";
import hljs from "highlight.js";

const API_URL = import.meta.env.VITE_API_URL;

const App: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>("");
  const [html, setHtml] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const convertMarkdown = async () => {
      try {
        const { data } = await axios.post(`${API_URL}/convert-to-html`, {
          markdown,
        });
        setHtml(data?.html);
        hljs.highlightAll();

        setError("");
      } catch (err) {
        setError("Oops! Something went wrong");
      } finally {
        setError("");
      }
    };
    convertMarkdown();
  }, [markdown]);

  return (
    <div className="relative">
      <nav className="flex flex-wrap md:justify-start justify-center gap-2 items-center from-violet-200 to-violet-100 bg-gradient-to-t sticky top-0 shadow-neutral-300 shadow-md">
        <figure>
          <img
            src={Logo}
            alt="logo"
            className="object-contain md:h-24 h-16 w-full"
          />
        </figure>
        <h1 className="text-slate-900 text-center md:text-3xl text-xl">
          Live Markdown Preview | Mahesh Muttinti
        </h1>
      </nav>
      <section>
        {error ? <p className="text-red-500">{error}</p> : null}
      </section>

      <main className="flex h-screen">
        <section className="w-1/2 ">
          <textarea
            className="w-full h-full p-4 border-r border-gray-300 outline-none"
            value={markdown}
            onChange={(e) => {
              setMarkdown(e.target.value);
            }}
            placeholder="Type your Markdown here..."
          />
        </section>

        <section
          className="w-1/2 p-4 bg-gray-100 overflow-y-auto"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}
        />
      </main>
    </div>
  );
};

export default App;
