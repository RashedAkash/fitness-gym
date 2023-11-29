import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useTrainer from "../Hooks/useTrainer";



const TrainerRoute = (children) => {
const {user, loading} = useAuth(); 
    const {isTrainer, isTrainerLoading} = useTrainer();
    const location = useLocation();

    if(loading || isTrainerLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isTrainer) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default TrainerRoute;