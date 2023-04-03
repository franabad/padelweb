'use client';

const ClientComponent = (props: { data: any }) => {
  const { data } = props;

  return (
    data && (
      <div className="text-xl text-black">
        <div>{data.id}</div>
        <div>{data.userId}</div>
        <div>{data.title}</div>
        <div>{data.completed}</div>
      </div>
    )
  );
};

export default ClientComponent;
