import React from "react";
interface ErrorObject {
  message: string;
  status: string;
}
const Error = () => {
  return (
    <div>
      <h1>Error 404 page not found !</h1>
    </div>
  );
};
export default Error;
