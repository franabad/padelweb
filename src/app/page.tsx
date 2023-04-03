import { ServerComponent } from "@/components/server/ServerComponent";

export default function Home() {
  return (
    <main>
      {/* @ts-expect-error */}
      <ServerComponent userId='1' />
    </main>
  );
}
