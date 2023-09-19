import React from 'react'
import "../styles/SearchNotif/searchNotif.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

function SearchNotif() {
  const notification = <FontAwesomeIcon icon={faBell} />
  const search  = <FontAwesomeIcon icon={faMagnifyingGlass} />
  return (
    <div id = "search_notif">
      <div id = "search">
        <label>{search}</label>
        <input type='text' placeholder='Search'/>
      </div>

      <div id = "notifications">
        <button>{notification}</button>
        <div id = "remainder"></div>
      </div>

    </div>
  )
}

export default SearchNotif