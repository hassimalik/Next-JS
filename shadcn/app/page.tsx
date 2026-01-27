import { Button } from "@/components/ui/button";
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
    </div>
  );
}
