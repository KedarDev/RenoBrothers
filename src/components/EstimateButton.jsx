import React from 'react'

const EstimateButton = () => {
  return (
    <div className="Freeestbutton" style={{width: '100%', height: '100%', position: 'relative'}}>
    <div className="Freeestbg" style={{width: 200, height: 37, left: 0, top: 0, position: 'absolute', background: '#FFDD3A', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '4px black solid'}} />
    <div className="FreeEstimate" style={{width: 200, height: 26, left: 4, top: 9, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Black Ops One', fontWeight: '400', wordWrap: 'break-word'}}>Free Estimate</div>
    </div>
  )
}

export default EstimateButton