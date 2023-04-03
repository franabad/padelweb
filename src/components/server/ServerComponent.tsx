import ClientComponent from '../client/ClientComponent';

export const ServerComponent = async (props: { userId: string }) => {
  const { userId } = props;

  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${userId}`
  )
    .then((response) => response.json())
    .then((json) => json);

  return <ClientComponent data={data} />;
};
