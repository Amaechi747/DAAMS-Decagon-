import { FC } from "react";
import { useForm } from "react-hook-form";
import axios from "axios"
import swal from "sweetalert"
import { useNavigate } from "react-router-dom"

interface FormValues {
  firstName: string;
  lastName: string;
  middleName: string;
  emailAddress: string;
  password: any;
  confirmPassword: any;
  dateOfBirth: any;
  phoneNumber: number;
  whatsappPhoneNumber: number;
  stateOfOrigin: string;
  currentLocation: string;
  highestQualification: string;
  courseOfStudy: string;
  gradeAchieved: string;
  nyscStatus: string;
  gender: string;
};
interface Props {
}


const ApplicantsRegister: FC = () => {
  const navigate = useNavigate();
  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>();
  // console.log(watch())
  // console.log(register())

  const submitForm = (data: FormValues) => {

    console.log(data)


    axios.post("http://localhost:5000/applicants/register", data)

      .then(res => {

        console.log(res.data)

        swal("Good job", "Thank you for the Submission", "success")

        navigate("/upload-documents")

      })

      .catch(function (error) {

        console.log(error)

        swal("Couldn't register applicant", "Please input or check all fields properly", "error")
      })

    // console.log(data);
  };



  return (
    <form className="register-form" onSubmit={handleSubmit(submitForm)}>
      <h1>Register</h1>
      <h4>Tell us about yourself</h4>
      <label htmlFor="firstName">What is your First Name?</label>
      <input placeholder="Type your first name"
        {...register("firstName", { required: "This is required." })}
        id="firstName"
      />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <label htmlFor="lastName">What is your last name?</label>
      <input placeholder="Type your last name" {...register("lastName", { required: true })} />
      {errors.lastName && <p>{errors.lastName.message}</p>}

      <label htmlFor="middleName">What is your middle name?</label>
      <input placeholder="Type your middle name" {...register("middleName", { required: true })} />
      {errors.lastName && <p>{errors.lastName.message}</p>}

      <label htmlFor="emailAddress">What is your email address?</label>
      <input placeholder="Type your email" {...register("emailAddress", { required: true })} />
      {errors.emailAddress && <p>{errors.emailAddress.message}</p>}

      <label htmlFor="password">Enter a password?</label>
      <input type="password" placeholder="Enter a password" {...register("password", { required: true })} />


      <label htmlFor="confirmPassword">Confirm your password?</label>
      <input type="password" placeholder="Confirm your password" {...register("confirmPassword", { required: true })} />


      <label htmlFor="gender">What is your gender?</label>
      <select {...register("gender")} id="gender">
        <option value="">Select...</option>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      {errors.gender && <p>{errors.gender.message}</p>}

      <label htmlFor="dateOfBirth">What is your date of birth?</label>
      <input type="date" {...register("dateOfBirth", { required: true, valueAsDate: true })} />
      {/* {errors.dateOfBirth && <p>{errors.dateOfBirth.message}</p>} */}

      <label htmlFor="phoneNumber">What is your Phone number?</label>
      <input
        placeholder="Type your phone number"
        type="number"
        {...register("phoneNumber", { valueAsNumber: true })}
        id="phoneNumber"
      />
      {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}

      <label htmlFor="whatsappPhoneNumber">What is your Whatsapp Phone number?</label>
      <input
        placeholder="Type your WhatsApp number"
        type="number"
        {...register("whatsappPhoneNumber", { valueAsNumber: true })}
        id="whatsappPhoneNumber"
      />
      {errors.whatsappPhoneNumber && <p>{errors.whatsappPhoneNumber.message}</p>}

      {/* <label htmlFor="stateOfOrigin">What is your state of origin?</label>
   <input {...register("stateOfOrigin", { required: true, minLength: 10 })} /> */}
      <label htmlFor="stateOfOrigin">What is your state of origin?</label>
      <select {...register("stateOfOrigin")} id="stateOfOrigin">
        <option>--Select State--</option>
        <option value="Abia">Abia</option>
        <option value="Adamawa">Adamawa</option>
        <option value="Akwa Ibom">Akwa Ibom</option>
        <option value="Anambra">Anambra</option>
        <option value="Bauchi">Bauchi</option>
        <option value="Bayelsa">Bayelsa</option>
        <option value="Benue">Benue</option>
        <option value="Borno">Borno</option>
        <option value="Cross River">Cross River</option>
        <option value="Delta">Delta</option>
        <option value="Ebonyi">Ebonyi</option>
        <option value="Edo">Edo</option>
        <option value="Ekiti">Ekiti</option>
        <option value="Enugu">Enugu</option>
        <option value="FCT">Federal Capital Territory</option>
        <option value="Gombe">Gombe</option>
        <option value="Imo">Imo</option>
        <option value="Jigawa">Jigawa</option>
        <option value="Kaduna">Kaduna</option>
        <option value="Kano">Kano</option>
        <option value="Katsina">Katsina</option>
        <option value="Kebbi">Kebbi</option>
        <option value="Kogi">Kogi</option>
        <option value="Kwara">Kwara</option>
        <option value="Lagos">Lagos</option>
        <option value="Nasarawa">Nasarawa</option>
        <option value="Niger">Niger</option>
        <option value="Ogun">Ogun</option>
        <option value="Ondo">Ondo</option>
        <option value="Osun">Osun</option>
        <option value="Oyo">Oyo</option>
        <option value="Plateau">Plateau</option>
        <option value="Rivers">Rivers</option>
        <option value="Sokoto">Sokoto</option>
        <option value="Taraba">Taraba</option>
        <option value="Yobe">Yobe</option>
        <option value="Zamfara">Zamfara</option>
        {/* {
          data.forEach((elem) => {
          <option>
            
          </option>
          })
        } */}
      </select>
      {errors.stateOfOrigin && <p>{errors.stateOfOrigin.message}</p>}  

      <label htmlFor="currentLocation">What is your current location?</label>
      <select {...register("currentLocation")} id="currentLocation">
        <option>--Select State--</option>
        <option value="Abia">Abia</option>
        <option value="Adamawa">Adamawa</option>
        <option value="Akwa Ibom">Akwa Ibom</option>
        <option value="Anambra">Anambra</option>
        <option value="Bauchi">Bauchi</option>
        <option value="Bayelsa">Bayelsa</option>
        <option value="Benue">Benue</option>
        <option value="Borno">Borno</option>
        <option value="Cross River">Cross River</option>
        <option value="Delta">Delta</option>
        <option value="Ebonyi">Ebonyi</option>
        <option value="Edo">Edo</option>
        <option value="Ekiti">Ekiti</option>
        <option value="Enugu">Enugu</option>
        <option value="FCT">Federal Capital Territory</option>
        <option value="Gombe">Gombe</option>
        <option value="Imo">Imo</option>
        <option value="Jigawa">Jigawa</option>
        <option value="Kaduna">Kaduna</option>
        <option value="Kano">Kano</option>
        <option value="Katsina">Katsina</option>
        <option value="Kebbi">Kebbi</option>
        <option value="Kogi">Kogi</option>
        <option value="Kwara">Kwara</option>
        <option value="Lagos">Lagos</option>
        <option value="Nasarawa">Nasarawa</option>
        <option value="Niger">Niger</option>
        <option value="Ogun">Ogun</option>
        <option value="Ondo">Ondo</option>
        <option value="Osun">Osun</option>
        <option value="Oyo">Oyo</option>
        <option value="Plateau">Plateau</option>
        <option value="Rivers">Rivers</option>
        <option value="Sokoto">Sokoto</option>
        <option value="Taraba">Taraba</option>
        <option value="Yobe">Yobe</option>
        <option value="Zamfara">Zamfara</option>
        {/* {
          data.forEach((elem) => {
          <option>
            
          </option>
          })
        } */}
      </select>
      {errors.currentLocation && <p>{errors.currentLocation.message}</p>}


      <h2>Education</h2>
      <h5>We would like some more information.</h5>
      <label htmlFor="highestQualification">What is your highest qualification?</label>
      <select {...register("highestQualification")} id="highestQualification">
        <option>Select option</option>
        <option value="PhD">PhD</option>
        <option value="Masters">Masters</option>
        <option value="Bachelors">Bachelors</option>
        <option value="HND">HND</option>
        <option value="Other">Other</option>
      </select>
      {errors.highestQualification && <p>{errors.highestQualification.message}</p>}

      <label htmlFor="courseOfStudy">Where did you graduate from?</label>
      <input placeholder="Type your Course of Study" {...register("courseOfStudy", { required: true })} />
      <label htmlFor="gradeAcheieved">Grade Achieved</label>
      <select {...register("gradeAchieved")} id="gradeAchieved">
        <option>Select option</option>
        <option value="first class">First Class</option>
        <option value="second class upper">Second Class Upper</option>
        <option value="second class lower">Second Class Lower</option>
        <option value="third class">Third Class</option>
      </select>
      {errors.gradeAchieved && <p>{errors.gradeAchieved.message}</p>}

      <label htmlFor="nyscStatus">NYSC Status</label>
      <select {...register("nyscStatus")} id="nyscStatus">
        <option>Select option</option>
        <option value="completed">Completed</option>
        <option value="exempted">Exempted</option>
        <option value="awaiting">Awaiting Service</option>
        <option value="serving">Currently Serving</option>
      </select>
      {errors.nyscStatus && <p>{errors.nyscStatus.message}</p>}

      <p style={{ color: "rgb(102, 102, 102)", fontSize: "14px", marginTop: "14px" }}>By proceeding (if you click
        Submit), you agree to Decagon's<a target="_blank" rel="noreferrer"
          href="https://decagonhq.com/privacy/" style={{ color: "rgb(52, 168, 83)" }}> Privacy Policy</a>
      </p>
      <input type="submit" />
    </form>
  )
};
export default ApplicantsRegister