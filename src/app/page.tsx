"use client";
import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineClose } from 'react-icons/ai';

interface Article {
  id: number;
  title: string;
  date?: string;
  content: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "The Evolution of Responsive Design",
    date: "2022-05-15",
    content:
      "Responsive web design has changed significantly over the years. It's not just about mobile anymore; it's about truly fluid layouts...",
  },
  {
    id: 2,
    title: "Exploring the Power of CSS Flexbox",
    date: "2022-06-10",
    content:
      "CSS Flexbox is a powerful layout tool that allows for responsive, flexible layouts without the hassle of floats or positioning...",
  },
  {
    id: 3,
    title: "Introduction to JavaScript ES6 Features",
    date: "2022-07-22",
    content:
      "The ES6 release of JavaScript has brought many improvements to the language, including arrow functions, template literals, and classes...",
  },
  {
    id: 4,
    title: "Understanding Asynchronous JavaScript",
    date: "2022-08-30",
    content:
      "Asynchronous JavaScript, from callbacks to promises to async/await, is a foundational concept for modern web development...",
  },
  {
    id: 5,
    title: "The Importance of Web Accessibility",
    date: "2022-09-12",
    content:
      "Making your websites accessible is crucial for reaching all audiences and it's a matter of ethics and inclusivity in the digital space...",
  },
  {
    id: 6,
    title: "A Guide to CSS Variables",
    date: "2022-10-05",
    content:
      "CSS Variables, also known as custom properties, are a game-changer for writing DRY, maintainable CSS code...",
  },
  {
    id: 7,
    title: "Building Single Page Applications with React",
    date: "2022-11-17",
    content:
      "Single Page Applications (SPAs) offer a seamless user experience. React is a library that simplifies creating complex SPAs...",
  },
  {
    id: 8,
    title: "SVGs in Web Design: Scalability and Performance",
    date: "2022-12-01",
    content:
      "Using SVGs in web design not only ensures sharp visuals on all screen sizes but also keeps performance in check with their small file sizes...",
  },
  {
    id: 9,
    title: "Web Performance Optimization Techniques",
    date: "2023-01-20",
    content:
      "Optimizing web performance is key to improving user experience and SEO. Techniques include image optimization, lazy loading, and code splitting...",
  },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const highlightText = (text: string, highlight: string): JSX.Element => {
    if (!highlight.trim()) {
      return <>{text}</>;
    }
    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);
    return (
      <span>
        {parts.map((part, index) =>
          regex.test(part) ? (
            <span key={index} className="bg-yellow-200 font-bold">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="space-y-4 px-72 py-20 bg-gray-100 min-h-screen">
      <div className="flex items-center justify-between ">
        <div className="space-y-10 w-1/2 relative">
          <h1 className="font-bold text-5xl">Search</h1>
          <div className="flex items-center border rounded">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for articles..."
              className="px-4 py-3 w-full text-gray-700 focus:outline-none rounded"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-0 mr-4 text-gray-700"
              >
                <AiOutlineClose />
              </button>
            )}
          </div>
        </div>
        <div className="w-1/4 flex items-center justify-center">
          <div className="border-4 border-gray-300 w-[400px] p-4">
            <p>
              <span className="font-bold">bitsofcode.</span> Articles on
              Frontend Development. All articles are written by{" "}
              <span className="underline">Ire Aderinokun,</span> Frontend
              Developer and User Interface Designer.
            </p>
            <div className="flex items-center space-x-2 mt-3 ">
              <a
                href="https://twitter.com/ireaderinokun"
                className="bg-blue-500 hover:underline gap-2 flex py-1 px-2 rounded items-center justify-center"
              >
                <FaTwitter size={20} className="text-white" />
                <h1 className="text-white"> @ireaderinokun</h1>
              </a>
              <a className="p-1 bg-white rounded">19.1K followers</a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/4">
        {searchTerm && (
          <p className="text-sm text-gray-600">
            {filteredArticles.length} posts were found.
          </p>
        )}
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className="py-2 border-b-4 border-gray-200 mb-4 space-y-4"
          >
            <h3 className="text-lg font-semibold">
              {highlightText(article.title, searchTerm)}
            </h3>
            <p className="text-gray-600 text-sm">{article.date}</p>
            <p className="text-gray-700">
              {highlightText(article.content, searchTerm)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
