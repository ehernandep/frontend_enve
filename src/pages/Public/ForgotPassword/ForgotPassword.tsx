import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../../models";
export interface ForgotPasswordInterface {}

const ForgotPassword: React.FC<ForgotPasswordInterface> = () => {
  const navigate = useNavigate();
  const onClickLogin = () => {
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  };
  return <div>reset password</div>;
};

export default ForgotPassword;
