import { FC } from "react";
import { useForm } from "react-hook-form";
import axios from "axios"
import swal from "sweetalert"
import { useNavigate } from "react-router-dom"


interface FormValues {
    emailAddress: string;
    password: any;

}

const ApplicantLogin: FC = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormValues>();

    const submitForm = (data: FormValues) => {
        console.log(data);

        axios.post("http://localhost:5000/applicants/login")
            .then(res => {

                console.log(res.data)

                swal("Good job", "Thank you for the Submission", "success")

                navigate("/upload-documents")

            })
            .catch(function (error) {

                console.log(error)

                swal("Couldn't login", "Please check all fields properly or email or password doesn't exist", "error")
            })

    }

    return (
        <>
            <form className="register-form">
                <h1>Login</h1>
                <label htmlFor="emailAddress">Email Address</label>
                <input placeholder="Email Address" {...register("emailAddress", { required: true })} />
                {errors.emailAddress && <p>{errors.emailAddress.message}</p>}

                <label htmlFor="password">Password</label>
                <input placeholder="Password" {...register("password", { required: true })} />
                {/* {errors.password && <p>{errors.password.message}</p>} */}

                <input type="submit" />

            </form>

        </>
    );
};

export default ApplicantLogin;





