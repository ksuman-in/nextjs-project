"use client";

import { Button } from "@/ui/components/ui/button";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const navigation = useRouter();
  const handleReload = () => {
    startTransition(() => {
      reset();
      navigation.refresh();
    });
  };
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <Button variant="link" onClick={handleReload}>
        Try Again
      </Button>
    </div>
  );
}
