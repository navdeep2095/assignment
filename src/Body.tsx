import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

interface POST {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

const Body = () => {
  const url = "https://dummyjson.com/posts";
  const [data, setData] = useState<POST[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const jsonData = await fetch(url);
    const jsData = await jsonData.json();
    setData(jsData.posts);
    console.log(data);
  }
  return (
    <div className="grid grid-cols-4 gap-4">
      {data.map((post, index) => {
        return (
          <Link key={index} to={`/details?id=${post.userId}`}>
            <div
              className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200 mt-2 mb-2">
              <p className="font-bold">POST: {index + 1}</p>
              <p>ID: {post.id}</p>
              <p>UserID: {post.userId}</p>
              <p>Title: {post.title}</p>
              <p>Body: {post.body}</p>
              <p>
                Tags:{" "}
                {post.tags.map((tag, i) => (
                  <span key={i}>{tag} </span>
                ))}
              </p>
              <p>👍 {post.reactions.likes}</p>
              <p>👎 {post.reactions.dislikes}</p>
              <p>👀 {post.views}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Body;
