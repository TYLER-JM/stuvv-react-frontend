import React from 'react'
import Form from './UploadForm'
import TemporaryDrawer from "./SideBar/index"
import CardListItem from "./CardListItem"

export default function Home() {
  return (
    <div>
      <h1>Welcome to the home page</h1>
      < TemporaryDrawer />
      < CardListItem />
      < Form />
    </div>
  );
}
