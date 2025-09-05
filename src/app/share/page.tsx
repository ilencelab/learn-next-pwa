"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [status, setStatus] = useState("正在保存书签...");
  const [bookmark, setBookmark] = useState<{
    title: string;
    url: string;
  } | null>(null);

  useEffect(() => {
    const saveBookmark = async () => {
      const formData = new URLSearchParams(window.location.search);
      const title = formData.get("title");
      const url = formData.get("text");

      if (!url) {
        setStatus("没有检测到网址");
        return;
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus(`已成功保存书签！`);
      setBookmark({ title: title || "Untitled", url });
      setTimeout(() => window.close(), 1500);
    };

    saveBookmark();
  }, []);

  return (
    <div>
      <div>{status}</div>
      {bookmark && (
        <div>
          <h2>{bookmark.url}</h2>
          <p>{bookmark.title}</p>
        </div>
      )}
    </div>
  );
}
