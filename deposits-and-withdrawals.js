import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Component22 from './component22'
import projectStyles from '.style.module.css'
import styles from './deposits-and-withdrawals.module.css'

const DepositsAndWithdrawals = (props) => {
  const [activeButton, setActiveButton] = useState('deposit')

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName)
  }

  return (
    <div className={styles['container']}>
      <div className={styles['container1']}>
        <Component22></Component22>
        <Link to="/signin" className={styles['navlink']}>
          <img
            src="/playground_assets/simple-home-with-pixel-art-style_475147-414%20%5B1%5D-modified-300w.png"
            alt="Home button"
            className={styles['image']}
          />
        </Link>
        <button
          name="Submit"
          type="submit"
          className={` ${styles['button']} ${projectStyles['button']} `}
        >
          Submit
        </button>
        <div className={styles['container2']}>
          <button
            name="deposit"
            type="button"
            className={`${styles['button1']} ${projectStyles['button']} ${activeButton === 'deposit' ? styles['activeButton'] : ''}`}
            onClick={() => handleButtonClick('deposit')}
          >
            DEPOSIT
          </button>
          <button
            name="withdraw"
            type="button"
            className={`${styles['button2']} ${projectStyles['button']} ${activeButton === 'withdraw' ? styles['activeButton'] : ''}`}
            onClick={() => handleButtonClick('withdraw')}
          >
            WITHDRAW
          </button>
        </div>
        <div className={styles['container3']}>
          <input
            type="number"
            min="0.01"
            name="amount"
            step="0.1"
            placeholder="0.0"
            autoComplete="0.0"
            className={` ${styles['textinput']} ${projectStyles['input']} ${projectStyles['button']} `}
          />
          <button
            id="drop"
            name="drop menu"
            type="button"
            className={` ${styles['button3']} ${projectStyles['button']} `}
          >
            &gt;
          </button>
        </div>
      </div>
      <img
        src="/playground_assets/layers%20%5B6%5D-200h.png"
        alt="image"
        className={styles['image1']}
      />
    </div>
  )
}

export default DepositsAndWithdrawals
