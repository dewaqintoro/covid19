import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'

import LoginDew from './login';
import Side from './coba/side';
import Sidedua from './coba/sidedua';


const Index = () => {

  // useEffect(() => {
  //   console.log('window.innerHeight', window.innerHeight);
  // })
 
  return (
    // <>
    //   <Examples />
    //   <Link href="/show-redux-state">
    //     <a>Click to see current Redux State</a>
    //   </Link>
    // </>
    <div className="loginku">
      <LoginDew/>
    </div>
    // <div>
    //   <Sidedua/>
    // </div>
  )
}

export default Index
