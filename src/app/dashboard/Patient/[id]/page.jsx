import { updatePatient } from "@/app/lib/actions";
import { getSingleUser } from "@/app/lib/data";
import styles from "@/app/components/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = async ({ params }) => {
  
  const { id } = params;
  const Organ = await getSingleUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form action={updatePatient} className={styles.form}>
          <input type="hidden" name="id" value={Organ.id}/>
          <label>Patient Email</label>
          <input type="text" name="email" placeholder={Organ.email} />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;