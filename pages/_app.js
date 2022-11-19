import '../styles/globals.css';
import '../pages/Components/Login/Login.css';
import '../pages/CommonComponents/Header/Header.css';
import '../pages/CommonComponents/TimeSheet/TimeSheet.css'
import '../pages/CommonComponents/CommonTable/CommonTable.css'
import '../pages/Components/Admin/CreateEmployee.css'
import '../pages/Components/BA/ClientForm.css'
import '../pages/Components/BA/TaskAssign.css'
import '../pages/Components/BA/Ba.css'
import '../pages/Components/Admin/Admin.css'
import { Provider } from 'react-redux'
import store from '../Redux/store'
// import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
 

  return  <Provider store={store}>
    <Component {...pageProps} />
      </Provider>
}

export default MyApp
