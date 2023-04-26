import { ServerComponent } from "@/components/server/ServerComponent";

export default function UserProfilePage(props: { params: any }) {
  const { params } = props;

  return (
    <main>
      {/* @ts-expect-error */}
      <ServerComponent userId={params.userId} />
      <div>{params.userId}</div>
    </main>
  );
}
