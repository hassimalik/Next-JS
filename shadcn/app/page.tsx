import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardDescription } from "@/components/ui/card";
import { CardAction } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { CardContent } from "@/components/ui/card";
export default function Home() {
  return (
    <div className="text-orange-600">
      <div className="mt-4 ml-4 flex gap-4 items-center justify-center max-h-full max-w-full text-xl " >
        <Button variant="ghost" className="hover:bg-white">Ghost</Button>
        <Button variant="default">Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
      <div className="mt-4 ml-4 flex gap-4 items-center justify-center max-h-full max-w-full text-xl ">
        <Button size="xs">XS</Button>
        <Button size="default"> Default</Button>
        <Button size="icon"> Icon</Button>
        <Button size="icon-lg">Icon-lg</Button>
        <Button size="icon-sm">Sm</Button>
      </div>
      <div className="mt-10 ml-5 flex items-center justify-center">
        <Card className="w-full flex justify-center text-center max-w-sm bg-black text-white">
          <CardHeader>Login to your Account
            <CardDescription>Enter your email below to login to your account.</CardDescription>
            <CardAction>
              <Button className="text-blue-500" variant="link">Sign Up</Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="m@example.com"></Input>
                  <Label htmlFor="password">Password</Label>
                  <Input placeholder="**********" id="password" type="password"></Input>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex text-center">
            <p className="">Login with Google</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}