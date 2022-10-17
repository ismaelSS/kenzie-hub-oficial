import { toast } from "react-toastify";

export const toastSucess = (string) => toast.success(string, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: {
        backgroundColor: "var(--grey-2)",
        color: "var(--grey-0)",
        fontSize: "14px",
        fontWeight: "700",
        borderRadius : "4px",
        height: "69px",
    }
}
    );

    export const toastError = (string) => toast.error(string, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
            backgroundColor: "var(--grey-2)",
            color: "var(--grey-0)",
            fontSize: "14px",
            fontWeight: "700",
            borderRadius : "4px",
            height: "69px",      
        }
        });

