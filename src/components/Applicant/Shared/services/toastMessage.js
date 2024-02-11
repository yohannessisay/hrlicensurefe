import { useToast } from "vue-toastification";
export const toastMixin = {
  setup() {
    const toast = useToast();
    const toastMessage = (message, duration, type) => {
      switch (type) {
        case "error":
          toast.error(message, {
            timeout: duration,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
          break;
        case "success":
          toast.success(message, {
            timeout: duration,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
          break;
        case "warning":
          toast.warning(message, {
            timeout: duration,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
          break;

        default:
          break;
      }
    };
    return { toastMessage };
  },
};
