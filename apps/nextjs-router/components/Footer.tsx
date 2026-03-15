"use client";
import { Button } from "@/ui/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
  const navigation = useRouter();
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/" && (
        <Button variant="link" onClick={() => navigation.back()}>
          Back
        </Button>
      )}
      <footer className="p-4">
        <h2 className="text-2xl font-bold">Footer</h2>
      </footer>
    </>
  );
}
