import { Button } from "@/ui/components/ui/button";

export default function Register() {
  return (
    <div className="mx-auto w-full max-w-xs">
      <h1 className="text-2xl font-bold">Register</h1>
      <p className="text-sm text-muted-foreground">
        Create an account to access exclusive features and content.
      </p>
      <Button className="mt-4 w-full">Sign Up</Button>
    </div>
  );
}
