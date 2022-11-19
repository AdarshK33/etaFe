import styles from '../styles/Home.module.css'
import Login from '../pages/Components/Login/Login'
import Link from 'next/link'
import Admin from './Components/Admin/AdminTimeSheet'
import AdminTabs from './Components/Admin/AdminTabs'
import BaTabs from './Components/BA/BaTabs'
import EmployeeTimeSheet from './Components/EmployeeTimeSheet/EmployeeTimeSheet'
import AllTasks from './Components/BA/AllTasks'

export default function Home() {
  
  return (
    <div className={styles.container}>
       {/* <Link href="/pages/Components/EmployeeTimeSheet/EmployeeTimeSheet"> */}
          {/* <Login /> */}
        {/* <EmployeeTimeSheet /> */}
        {/* </Link> */}
        <AdminTabs />
        {/* <BaTabs /> */}



    </div>
  )
}
