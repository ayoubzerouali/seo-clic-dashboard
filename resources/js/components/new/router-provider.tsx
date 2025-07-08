import { RouterProvider as Router } from "react-router-dom";
import { router } from "@/routes";

export function RouterProvider() {
  return <Router router={router} />;
}