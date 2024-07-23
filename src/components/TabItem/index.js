// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsList, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabsList
  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }
  const activeTab = isActive ? 'active' : ''
  return (
    <li className="tab-list-container">
      <button className={`tab-heading ${activeTab}`} onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
