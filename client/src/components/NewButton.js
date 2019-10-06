import React from 'react'

import {ReactComponent as AddIcon} from '../assets/add.svg'

const NewButton = ({toggleModal}) => {
  return (
    <div className="new-button">
      <button onClick={() => toggleModal()}>
        <AddIcon />
      </button>
    </div>
  )
}

export default NewButton
