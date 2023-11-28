import { deleteOrga } from "@/app/lib/actions";
import { fetchOrganization } from "@/app/lib/data";
import Search from "@/app/components/dashboard/search/search";
import Pagination from "@/app/components/dashboard/pagination/pagination";
import styles from "@/app/components/dashboard/users/users.module.css";
import Image from "next/image";
import Link from "next/link";

const OrganizationPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, organization } = await fetchOrganization(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Mission</td>
            <td>BloodBankName</td>
            <td>PhoneNumber</td>

            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {organization.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.organizationName}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.mission?.toString().slice(4, 16)}</td>
              <td>{user.bloodBankName}</td>
              <td>{user.phoneNumber}</td>

              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/Organization/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteOrga}>
                    <input type="hidden" name="id" value={(user.id)} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default OrganizationPage;