
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table/Table';

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      //new array we push data in after we filtered it from json
      const filteredData = []
      try {
        const data = await axios.get('./myresults.json')
        const res = data.data.hosts
        res.forEach(row => {
          const makeLine = row.split(':')[1].replaceAll(',', ' ||')
          //creating new object with domain and ip adrress 
          const rowObj = {
            domain: row.split(':')[0],
            ipAddress: makeLine
          }
          filteredData.push(rowObj)
        });
        setData(filteredData)
      } catch (error) {
        //handle if there is an error
        setError(true)
      }
      setLoading(false)
    }
    getData()
  }, [])



  return (
    <div className="App">
      {loading && <h1>Loading..</h1>}
      {error && <h1>Error..</h1>}
      {!loading && !error && data.length && <Table data={data} />}
    </div>
  );
}

export default App;
