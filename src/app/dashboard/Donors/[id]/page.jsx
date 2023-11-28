import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";
import styles from "@/app/components/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = async ({ params }) => {
  
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        
        {user.name}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id}/>
          <label>Username</label>
          <input type="text" name="name" placeholder={user.name} />
          <label>Gender</label>
          <input type="text" name="gender" placeholder={user.gender} />
          <label>phoneNumber</label>
          <input type="text" name="phoneNumber" placeholder={user.phoneNumber} />
          <label>email</label>
          <input type="text" name="email" placeholder={user.email} />
          <label>bloodGroup</label>
          <input type="text" name="bloodGroup" placeholder={user.bloodGroup} />

          <label>Address</label>
          <textarea type="text" name="address" placeholder={user.address} />
         
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;