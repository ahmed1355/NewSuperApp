import React from 'react'
import Imageside from './imageside'
import Formside from './formside'
import './common.css'
import styles from './formside.module.css'
function Home() {
  return (

<>
<div className={styles.dis}>

<Imageside/>
<Formside/>
</div>
</>    )
}

export default Home