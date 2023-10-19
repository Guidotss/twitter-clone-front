import { Sidebar } from "@/components";

interface TweetsLayOutProps {
  children: React.ReactNode;
}

export default function TweetsLayOut({ children }: TweetsLayOutProps) {
  return (
    <div className="grid 2xl:grid-cols-3 lg:grid-cols-4 lg:gap-x-20">
      <div className="flex flex-col items-end">
        <Sidebar />
      </div>
      <div className="2xl:col-span-1 lg:col-span-2">{children}</div>
      <div className="col-span-1">
        <h1 className="text-4xl font-bold">Home</h1>
      </div>
    </div>
  );
}
