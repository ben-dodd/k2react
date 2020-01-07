import React from "react";
import ReactTable from 'react-table';
import 'react-table/react-table.css';

function AsbestosSurveyTable(props) {
  const { loading, registerList, classes } = props;

  return (
    <div>
      <div className={classes.heading}>Positive/Presumed ACMs</div>
      <ReactTable
        loading={loading}
        pageSizeOptions={[10, 15, 20, 25, 50, 100, 200]}
        minRows={1}
        data={registerList.filter(e => e.recommendation)}
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
          maxWidth: 120,
        }, {
          id: 'asbestosResult',
          Header: 'Asbestos Result',
          accessor: d => d.asbestosResult,
          Cell: c => c.value ? <span className={classes[`colorsCell${c.value.color}`]}>{c.value.text}</span> : <span />,
          maxWidth: 140,
        }, {
          id: 'materialRisk',
          Header: 'Material Risk',
          accessor: d => d.materialRisk && d.materialRisk.score,
          Cell: c => c.original.materialRisk && c.original.materialRisk.score ? <span className={classes[`colorsCell${c.original.materialRisk.color}`]}>{`${c.original.materialRisk.text} (${c.original.materialRisk.score})`}</span> : <span />,
          maxWidth: 120,
        },{
          Header: 'Recommendation',
          accessor: 'recommendation',
        },]
      } />
    </div>
  );
}

export default AsbestosSurveyTable;
