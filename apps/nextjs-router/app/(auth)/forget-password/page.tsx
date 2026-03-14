import { Button } from "@/ui/components/ui/button";

export default function ForgetPassword() {
  return (
    <div className="mx-auto w-full max-w-xs">
      <h1 className="text-2xl font-bold">Forget Password</h1>
      <p className="text-sm text-muted-foreground">
        Enter your email address to receive a password reset link.
      </p>
      <Button className="mt-4 w-full">Send Reset Link</Button>
    </div>
  );
}
