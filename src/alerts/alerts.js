import Swal from "sweetalert2";
export const handleAlertSuccess = ({title = 'success', handleSucces}) => {
  Swal.fire({
    icon: "success",
    title: title || '',
    allowOutsideClick: false,
    html: title,
    confirmButtonText: "Accept",
  }).then((result) => {
    if (result.isConfirmed) {
      handleSucces && handleSucces()
    }
  });
};
export const handleAlertConfirmed = ({ title, action }) => {
  Swal.fire({
    icon: "info",
    title: title || 'Are you sure to continue with this action?',
    showCancelButton: true,
    confirmButtonText: "Confirm",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      // handleAlertSuccess();
     action && action()
    }
  });
};

export const handleAlertLoading = () => {
  Swal.fire({
    title: "please wait",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
};
export const handleAlertError = () => {
  Swal.fire({
    icon: "error",
    title: "Oops... , sorry an error occurred",
    text: "Try again later",
    allowOutsideClick: false,
  }).then((response) => {
    if (response.isConfirmed) {
      window.location.reload();
    }
  });
};


export const handleAlertErrorData = (title) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    iconColor: "#fcd34d",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    background: "#1e1c1d",
    color: "#f4f4f4",
  });
  Toast.fire({
    icon: "error",
    title: 'Se elimino de favoritos'
  });
};

export const handleAlertSuccesData = (title) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    iconColor: "#fcd34d",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    background: "#1e1c1d",
    color: "#f4f4f4",
  });
  Toast.fire({
    icon: "success",
    title: 'Se ha añadido a favoritos'
  });
};
