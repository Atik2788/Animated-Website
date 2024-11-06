import '../Styles/dashboardPreview.scss'
import { dashboard } from '../Images'

const DashboardPreview = () => {
  return (
    <div className='app__dashboard'>
      <img src={dashboard} alt="" draggable={false} />
    </div>
  )
}

export default DashboardPreview