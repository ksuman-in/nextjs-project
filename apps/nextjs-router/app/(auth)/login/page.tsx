import { Button } from "@/ui/components/ui/button";

export default function Login() {
  return (
    <div className="mx-auto w-full max-w-xs">
      <h1 className="text-2xl font-bold">Login</h1>
      <p className="text-sm text-muted-foreground">
        Welcome back! Please enter your credentials to access your account.
      </p>
      <Button className="mt-4 w-full">Sign In</Button>
    </div>
  );
}
