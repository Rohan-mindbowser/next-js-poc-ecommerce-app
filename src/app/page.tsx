"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();

  useEffect(() => {
    push("/pages/home");
  }, []);
  return <div></div>;
}
