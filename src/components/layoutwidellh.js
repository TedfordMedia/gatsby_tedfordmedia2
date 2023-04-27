import * as React from "react"
import "../styles/styles.css"

const Layout = props => {
  return (
    <>
      <div className={'mydiv'}>
        {props.children}
      </div>
    </>
  )
}

export default Layout   