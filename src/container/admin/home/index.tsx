import Description from "../../../components/description";
import PieChart from "../../../components/graph/pie";
import LineChart from "../../../components/graph/progress";
import { availableOptions, customerCount, pets } from "../../../constants/data";
import styles from "./index.module.scss";

const AdminHome = () => {

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard_head}>
        <div className={styles.dashboard_head_petsCount}>
          <h3>Pets Count :</h3>
          <PieChart pieData={pets} /></div>
        <div className={styles.dashboard_head_description}><Description descriptionData={availableOptions} /></div>
      </div>
      <div className={styles.dashboard_tail}>
        <h3>Progress Update :</h3>
        <div>
          <LineChart customerCount={customerCount} />
        </div>
      </div>
    </div>
  )
}

export default AdminHome
