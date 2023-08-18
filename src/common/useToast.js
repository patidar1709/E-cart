import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//component to show toaster message for api success and failure
export const useToast = () => {
  //show success message for api calls
  const showSuccess = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showError = (message) => {
    //show error message for api calls
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return { showSuccess, showError };
};
