import React from 'react'
import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css'

function NonAsbestosTable(props) {
  const { loading, registerList, classes } = props

  return (
    <div>
      <div className={classes.heading}>Non-Asbestos Materials</div>
      <ReactTable
        loading={loading}
        pageSizeOptions={[10, 15, 20, 25, 50, 100, 200]}
        data={registerList.filter((e) => !e.recommendation)}
        minRows={1}
        columns={[
          {
            Header: 'Room',
            accessor: 'room'
          },
          {
            Header: 'Item',
            accessor: 'item'
          },
          {
            Header: 'Material',
            accessor: 'material'
          },
          {
            Header: 'Extent',
            accessor: 'extent'
          },
          {
            Header: 'Sample',
            accessor: 'sample'
          }
        ]}
      />
    </div>
  )
}

export default NonAsbestosTable
