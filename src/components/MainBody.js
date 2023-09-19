import React from 'react'
import SearchNotif from './SearchNotif'
import SalesInformation from './SalesInformation'
import Display from './Display'

function MainBody() {
  return (
    <div id = "main_body">
      <SearchNotif/>
      <SalesInformation/>
      <Display/>
    </div>
  )
}

export default MainBody