'use client';

import { TestModel } from "@/models/test.model";

const ClientComponent = (props: { data: TestModel }) => {
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
