import './RowTable.css'

const TableRow = ({ rowData }) => {
    return (
    <div className='table__row'>
      <div className="domain">
       <h4>{rowData.domain}</h4>
      </div>
      <div className="ip">
      <h4>{rowData.ipAddress}</h4>
      </div>
    </div>
  )
}

export default TableRow