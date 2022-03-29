import './Table.css'
import './Row/RowTable.css'
import RowTable from './Row/RowTable'
import Pagination from '../Pagination/Pagination'
import { useEffect, useState } from 'react'

const itemsPerPage = 7;
const startIndex = 0

const Table = ({ data }) => {
    const [sortedData, setSortedData] = useState([])
    const [currData, setCurrData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0)
    //calculate what indexes we display on screen (7 per page)
    const getCurrentIndex = () => {
        let start, end = 0
        start = currentPage === 0 ? startIndex : currentPage * itemsPerPage
        end = currentPage === 0 ? itemsPerPage : (currentPage * itemsPerPage) + itemsPerPage
        return { start, end }
    }

    useEffect(() => {
        const currentIndex = getCurrentIndex()
        if (sortedData.length) {
            setCurrData(sortedData.slice(currentIndex.start, currentIndex.end))
        } else {
            setCurrData(data.slice(currentIndex.start, currentIndex.end))
        }

    }, [currentPage, sortedData])

    const sortingData = (col) => {
        //getting our data column(domain or ip) and sort it
            const sorted = [...data].sort((a, b) => {
                if(col === 'domain'){
                    return a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
                }else{
                     return parseInt(a[col]) > parseInt(b[col]) ? 1 : -1
                }
            })
            setSortedData(sorted)        
    };


    return (
        <div className='container'>
            <div className="table">
                <div className='table__row'>
                    <div className="domain__header" >
                        <h1 onClick={() => sortingData("domain")}>Domain</h1>
                    </div>
                    <div className="ip__header">
                        <h1 onClick={() => sortingData("ipAddress")}>IP Address</h1>
                    </div>
                </div>
                {currData.map((row, i) => (
                    <RowTable key={i} rowData={row} setCurrentPage={setCurrentPage} />
                ))}
            </div>
            {data && <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalItems={data.length} itemsPerPage={itemsPerPage} />}
        </div>
    )
}

export default Table