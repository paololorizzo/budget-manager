import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {signIn} from "@/app/(auth)/login/actions";

export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card className="mx-auto max-w-sm">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Login</CardTitle>
                    <CardDescription>Enter your email and password to login to your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="m@example.com" name="email" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" name="password" required />
                        </div>
                        <Button formAction={signIn} type="submit" className="w-full" >
                            Login
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
