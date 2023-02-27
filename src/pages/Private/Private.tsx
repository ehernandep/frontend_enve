import { Navigate, Route } from "react-router-dom";

import { PrivateRoutes, Roles } from "../../models";
import RoutesWithNotFound from "../../utilities/RoutesWithNotFound/RoutesWithNotFound.utility";

import RoleGuard from "../../guards/rol.guard";

import { useSelector } from "react-redux";
import { AppStore } from "../../redux/store";

export interface PrivateInterface {}

const Private: React.FC<PrivateInterface> = () => {
  const userState = useSelector((store: AppStore) => store.user);
  console.log(userState.user.rol);
  return (
    <div className='app'>
      <main className='content'>
        <RoutesWithNotFound>
          {
            <Route element={<RoleGuard rol={Roles.USER} />}>
              <Route
                path='/'
                element={<Navigate to={PrivateRoutes.DASHBOARD} />}
              />
            </Route>
          }
        </RoutesWithNotFound>
      </main>
    </div>
  );
};

export default Private;
