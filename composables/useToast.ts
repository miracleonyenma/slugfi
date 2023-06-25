type ToastOptions = {
  show: boolean;
  message: string;
  type: string;
  duration?: number;
};

export const useToast = () => {
  const toast = useState<ToastOptions>("toast", () => ({
    show: false,
    message: "",
    type: "success",
  }));

  const showToast = ({
    message,
    type,
    duration,
  }: {
    message: string;
    type: string;
    duration?: number;
  }) => {
    toast.value = {
      show: true,
      message,
      type,
    };

    setTimeout(() => {
      hideToast();
    }, duration || 3000);
  };

  const hideToast = () => {
    toast.value = {
      show: false,
      message: "",
      type: "success",
    };
  };

  return { toast, showToast, hideToast };
};
