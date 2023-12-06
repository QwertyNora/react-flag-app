import React from 'react'
import CountryInfo from './CountryInfo'

const Modal = ({countryData}) => {
  return (
    <div className="modal">
        <CountryInfo countryData={countryData}/>
    </div>
  )
}

export default Modal