<<<<<<< HEAD
import React from "react";
import ReactTable from 'react-table';
import 'react-table/react-table.css';

function NonAsbestosTable(props) {
  const { loading, registerList, classes } = props;
=======
import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

function NonAsbestosTable(props) {
  const { loading, registerList, classes } = props
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

  return (
    <div>
      <div className={classes.heading}>Non-Asbestos Materials</div>
      <ReactTable
        loading={loading}
        pageSizeOptions={[10, 15, 20, 25, 50, 100, 200]}
<<<<<<< HEAD
        data={registerList.filter(e => !e.recommendation)}
        minRows={1}
        columns={
        [{
          Header: 'Room',
          accessor: 'room',
        }, {
          Header: 'Item',
          accessor: 'item',
        }, {
          Header: 'Material',
          accessor: 'material',
        }, {
          Header: 'Extent',
          accessor: 'extent',
        }, {
          Header: 'Sample',
          accessor: 'sample',
        },]
      }
    />
    </div>
  );
}

export default NonAsbestosTable;
=======
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
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
