import React from 'react'

const BusinessItem = ({business}) => {

  const {company, description, link, logo } = business
  return (
    <div>
      <img src={logo.name} alt=""/>
  <h3>{company}</h3>
  <h3>{description}</h3>
  <h3>{link}</h3>
    </div>
  )
}

export default BusinessItem
