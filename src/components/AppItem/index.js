// Write your code here
import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {appId, appName, imageUrl, category} = appsList
  return (
    <li className="app-list-container">
      <img src={imageUrl} alt={appName} className="app-img" />
      <p className="app-heading">{appName}</p>
    </li>
  )
}

export default AppItem
