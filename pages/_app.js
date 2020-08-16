import { Provider } from 'react-redux'
import { useStore } from '../store'


import 'antd/dist/antd.css'
// import '../styles/dashboard.css'
import '../styles/dew.css'
// import '../styles/global.css'
import React, { useState,useEffect } from 'react'
 
import '../styles/card.css'
import '../styles/table.css'
import '../styles/infoBox.css' 
import '../styles/mapku.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import '../styles/Login.css'
// import * as Leaflet from 'react-leaflet'

// import * as Leaflet from "leaflet"
// leaflet = require('leaflet');

 
// const isBrowser = typeof window !== 'undefined';
//   let leaflet;
//   if (isBrowser) {
//       leaflet = require('leaflet');
//       // import leaflet from 'leaflet'
//   }

export default function App({ Component, pageProps }) {
  useEffect(() => {
    let leaflet;
    // const isBrowser = typeof window !== 'undefined';
    if (typeof window == 'undefined') {
      // Leaflet
      leaflet = require('leaflet');
      console.log("window tidak ada");
    }else{
      console.log("windows ada", window.innerWidth)
    }
    // console.log('window.innerHeight', window.innerHeight);

  })


  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      {console.log("ini store",store)}
      <Component {...pageProps} />
    </Provider>
  )
}
