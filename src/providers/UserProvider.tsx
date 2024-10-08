import { useGetUserQuery } from "@/app/store/login/login";
import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { userActions } from "@/app/store/user/user";
import { ReactNode, useEffect } from "react";

export const UserProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const { access_token } = useAppSelector((state) => state.userReducer);

  const { data: userData, error } = useGetUserQuery(undefined, {
    skip: !access_token,
    pollingInterval: 60000,// 1 minute
  });

  useEffect(() => {
    if (userData) {
      dispatch(
        userActions.setUser({
          firstName: userData.firstName,
          lastName: userData.lastName,
          id: userData.id,
        })
      );
    }
  }, [userData, dispatch, access_token]);
 
  useEffect(() => {
    if (error && "status" in error && error?.status === 401) {
      localStorage.removeItem("access_token");
      dispatch(userActions.resetUser());
    }
  }, [error, dispatch]);

  return <>{children}</>;
};
