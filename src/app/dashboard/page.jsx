
import Card from "../components/dashboard/card/card";
import Chart from "../components/dashboard/chart/chart";
import styles from "../components/dashboard/dashboard.module.css";
import { fetchDonors ,fetchOrganization,fetchPatient} from "../lib/data";

import UsersPage from "./Donors/page";

const Dashboard =async () => {
  const { count, donors } = await fetchDonors();
  const { organization } = await fetchOrganization();
  const { patient } = await fetchPatient();

  const organ= organization.length
  const patientnum= patient.length


  console.log(organ)
  const cards = [
    {
      id: 1,
      title: "Donors",
      number:count ,
     
    },
    {
      id: 2,
      title: "Organization",
      number:organ,
      
    },
    {
      id: 3,
      title: "Patient",
      number: patientnum,
     
    },
  ];
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <UsersPage/>
        <Chart />
      </div>
    </div>
  );
};

export default Dashboard;