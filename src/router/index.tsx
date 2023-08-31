/*
 * @Description: 
 * @Author: xiuji
 * @Date: 2023-08-25 10:41:08
 * @LastEditTime: 2023-08-30 14:33:35
 * @LastEditors: Do not edit
 */
import { ReactNode, lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Loading from "@/components/loading";
const Login = lazy(() => import("@/views/Login"));
const Home = lazy(() => import("@/views/Home"));

export interface RoutesParams {
    path: string
    element: ReactNode
    children?: RoutesParams[]
}

const lazyComponent = (comp: ReactNode): ReactNode => {
    return <Suspense fallback={<Loading />}>{comp}</Suspense>
}

export const Routes: Array<RoutesParams> = [
    {
        path: "/",
        element: lazyComponent(<Home />)
    },
    {
        path: '/login',
        element: lazyComponent(<Login />)
    }
]

const WrappedRoutes = (): React.ReactElement | null => {
    return useRoutes(Routes)
}

export default WrappedRoutes