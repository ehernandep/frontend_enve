import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { PrivateRoutes, Roles } from '../models';
import { AppStore } from '../redux/store';
interface Props {
  rol: Roles;
}
const RoleGuard = ({ rol }: Props) => {
  const userState = useSelector((store: AppStore) => store.user);
  console.log(userState.user.rol , rol)
  return userState.user.rol === rol ? (
    <Outlet />
  ) : (
    <Navigate replace to={PrivateRoutes.PRIVATE} />
  );
};
export default RoleGuard;
