import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="container m-5 p-5 text-center">
      <h1>Oops!</h1>
      <p>Site not found</p>
    </div>
  );
}