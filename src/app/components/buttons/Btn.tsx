"use client";

import { JSXElementConstructor, ReactElement } from "react";

interface BtnProps {
  url: string;
  icon: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
  handle?: (url: string) => void;
}

export default function Btn({ url, icon, handle }: BtnProps) {
  return (
    <button
      onClick={() => handle ? handle(url) : window.location.href = url}
      className="hover:scale-125 text-end"
    >
      <div>{icon}</div>
    </button>
  );
}
