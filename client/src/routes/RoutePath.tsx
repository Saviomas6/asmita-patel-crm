import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Layout from "../components/layout/Layout";
import NotFound from "../components/notFound/NotFound";
import { Paths } from "./path";
import HomeSection from "../pages/homeSection/HomeSection";
import { useAppDispatch, useAppSelector } from "../logic/redux/store/hooks";
import SignInSection from "../pages/signInSection/SignInSection";
import RegisterSection from "../pages/registerSection/RegisterSection";
import { setLoggedDetail, setLoggedIn } from "../logic/redux/action/action";
import { useEffect } from "react";
import { useGetUserDetail } from "../logic/reactQuery/query/useGetUserDetail";
import LoadingSpinner from "../components/loading/LoadingSpinner";
import ClientDetail from "../pages/clientDetail/ClientDetail";

export interface RouteDefinition {
  element: any;
  routes?: RouteDefinition[];
  path: string;
  protected?: boolean;
  redirect?: any;
  title?: string;
  requires?: any;
  pathType?: number;
}

const NotFoundRoute: RouteDefinition = {
  path: "*",
  element: NotFound,
  protected: false,
  title: "",
};

export const routes: RouteDefinition[] = [
  {
    path: Paths.home,
    element: HomeSection,
    protected: false,
    title: "Home Section",
  },

  {
    path: Paths.client,
    element: ClientDetail,
    protected: true,
    title: "ClientDetail",
  },
  {
    path: Paths.signIn,
    element: SignInSection,
    protected: false,
    title: "SignIn Section",
  },
  {
    path: Paths.register,
    element: RegisterSection,
    protected: false,
    title: "Register Section",
  },
].concat(NotFoundRoute as any);

const RoutePath = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn);
  const { data, isLoading, isFetching } = useGetUserDetail();
  function getRouteRenderWithAuth(isLoggedIn: boolean, route: RouteDefinition) {
    const RouteComponent = route.requires
      ? route.requires(route.element)
      : route.element;

    if (!isLoggedIn && !route.protected) {
      return { element: <RouteComponent /> };
    } else if (!isLoggedIn && route.protected) {
      return { element: <Navigate to={Paths.signIn} /> };
    } else if (isLoggedIn === route.protected) {
      return { element: <RouteComponent /> };
    } else if (isLoggedIn && route.path === "*") {
      return { element: <RouteComponent /> };
    } else if (isLoggedIn) {
      return { element: <RouteComponent /> };
    }
  }

  const mapRoutes = (route: RouteDefinition, i: number) => {
    const render = getRouteRenderWithAuth(isLoggedIn, route);
    return <Route key={i} path={route.path} {...render} />;
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    dispatch(setLoggedIn(false));
    dispatch(setLoggedDetail([]));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const expirationTime = localStorage.getItem("expirationTime");
    if (token && expirationTime) {
      const currentTime = Date.now();
      if (currentTime < Number(expirationTime)) {
        dispatch(setLoggedIn(true));
        dispatch(
          setLoggedDetail([
            {
              bannerUrl: data && data.bannerUrl,
              bio: data && data.bio,
              email: data && data.email,
              joinedDate: data && data.joinedDate,
              name: data && data.name,
              profileUrl: data && data.profileUrl,
              username: data && data.username,
              _id: data && data._id,
            },
          ])
        );
      } else {
        handleLogout();
      }
    }
  }, [location, data]);

  return (
    <>
      {isLoading || isFetching ? (
        <LoadingSpinner />
      ) : (
        <Layout>
          <Routes>{routes.map(mapRoutes)}</Routes>
        </Layout>
      )}
    </>
  );
};
export default RoutePath;
