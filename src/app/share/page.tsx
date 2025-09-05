"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [status, setStatus] = useState("正在保存书签...");
  const [bookmark, setBookmark] = useState<{
    title: string;
    url: string;
  } | null>(null);

  useEffect(() => {
    const formData = new URLSearchParams(window.location.search);
    const title = formData.get("title");
    const url = formData.get("text");

    if (!url) {
      setStatus(`没有检测到网址\n(${window.location.search.slice(1)})`);
      return;
    }

    setStatus("保存成功");
    setBookmark({ title: title || "Untitled", url });
  }, []);

  return (
    <div>
      <div>{status}</div>
      {bookmark && (
        <div>
          <h2>{bookmark.url}</h2>
          <p>{bookmark.title}</p>
          <button onClick={() => window.close()}>保存</button>
        </div>
      )}
    </div>
  );
}
