"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [status, setStatus] = useState("正在保存书签...");

  useEffect(() => {
    const saveBookmark = async () => {
      const formData = new URLSearchParams(window.location.search);
      const url = formData.get("url");
      const title = formData.get("title") || url;

      if (!url) {
        setStatus("没有检测到网址");
        return;
      }

      console.log(url, title);

      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("已成功保存书签！");
      setTimeout(() => window.close(), 1500);
    };

    saveBookmark();
  }, []);

  return (
    <div className="flex h-screen items-center justify-center text-lg">
      {status}
    </div>
  );
}
