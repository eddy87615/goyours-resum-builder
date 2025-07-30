import Home from "../home/home";
import Navigation from "../../components/navigation/navigation";

export const routes = [
  {
    path: "/",
    element: <Navigation />,
    // errorElement: <></>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];
