import { useEffect } from "react";
import Swal from "sweetalert2";

export const alertpop = (isAuthenticated: boolean) => {
    if (isAuthenticated) {
        Swal.fire({
            title: "Logged In successfully!",
            // text: "You clicked the button!",
            icon: "success"
        })
        // <Navigate to="/home" />
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Incorrect email or password",
            text: "Something went wrong!",
            // footer: '<a href="#">Why do I have this issue?</a>'
        });

    }
}

export const missingAlert = () => {
    Swal.fire({
        title: "Email Address",
        icon: "question"
    });
}
export const inputErr = () => {
    Swal.fire({
        icon: "error",
        title: "All fields are required!",
        text: "Cannot submit without entering fields"
        // footer: '<a href="#">Why do I have this issue?</a>'
    });
}

export const submitionSuccess = () => {
    let timerInterval: ReturnType<typeof setInterval>;
    Swal.fire({
        title: "Submission on progress!",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup()?.querySelector("b");
            timerInterval = setInterval(() => {
                if (timer)
                    timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
        }
    });
}

export const emailInvalid = () => {
    Swal.fire({
        icon: "error",
        title: "Invalid mail address!",
        // footer: '<a href="#">Why do I have this issue?</a>'
    });
}

export const successSubmission=()=>{
    Swal.fire({
        title: "Feedback submitted",
        text: "Thank You!",
        icon: "success"
    })
}
