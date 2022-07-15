import { ApplicantsSidebar } from "../../components"


interface Props {

}


const WithdrawApplication: React.FunctionComponent<Props> = (props) => {
  return (
    <>
      <ApplicantsSidebar />
      <section>
        <h2>Reason : </h2><div>


        </div>

        <textarea placeholder='Type Something'>

        </textarea>


      </section>
      <div>
        <form>
          <input type="submit" value="Submit"></input>

        </form>
      </div>

    </>

  );
};

export default WithdrawApplication;
