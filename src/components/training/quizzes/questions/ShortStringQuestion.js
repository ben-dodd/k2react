import React from 'react'

import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import FormLabel from '@material-ui/core/FormLabel'

function ShortStringQuestion(props) {
  return (
    <div style={{ marginTop: 24 }}>
      <FormControl component='fieldset'>
        {props.q.image && <img src={props.q.image} alt='' height='300' style={{ borderRadius: 16 }} />}
        <FormLabel component='legend'> {props.q.question}</FormLabel>
        <TextField id='standard-name' style={{ width: 200 }} value={props.q.selected} onChange={props.onChanged} margin='normal' />
      </FormControl>
      <hr />
    </div>
  )
}

export default ShortStringQuestion
