import { updateOrganization } from "@/app/lib/actions";
import { getOrganization } from "@/app/lib/data";
import styles from "@/app/components/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = async ({ params }) => {
  
  const { id } = params;
  const Organ = await getOrganization(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        
        {Organ.organizationName}
      </div>
      <div className={styles.formContainer}>
        <form action={updateOrganization} className={styles.form}>
          <input type="hidden" name="id" value={Organ.id}/>
          <label>Organization Name</label>
          <input type="text" name="organizationName" placeholder={Organ.organizationName} />
          <label>BloodBankName</label>
          <input type="text" name="bloodBankName" placeholder={Organ.bloodBankName} />
          <label>phoneNumber</label>
          <input type="text" name="phoneNumber" placeholder={Organ.phoneNumber} />
          <label>Email</label>
          <input type="text" name="email" placeholder={Organ.email} />
          <label>Mission</label>
          <input type="text" name="mission" placeholder={Organ.mission} />

          <label>Address</label>
          <textarea type="text" name="address" placeholder={Organ.address} />
         
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;