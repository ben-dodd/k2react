import React from 'react'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'

export const AsbestosClickyBasic = (fgColor, bgColor, tooltip, label, toggle) => {
  return (
    <Tooltip title={tooltip} key={label}>
      <div className={bgColor}>
        <Button
          variant='outlined'
          className={fgColor}
          onClick={() => {
            // event.stopPropagation();
            toggle()
          }}
        >
          {label}
        </Button>
      </div>
    </Tooltip>
  )
}
