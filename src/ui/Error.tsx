/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouteError } from "react-router-dom";
const Error = () => {
  const error: any = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.error.message}</p>
    </div>
  );
};

export default Error;
