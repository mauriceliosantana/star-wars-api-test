import { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Container, Spinner } from 'react-bootstrap'
import PeopleList from './components/PeopleList'

function App() {

  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [spinnerVisible, setSpinnerVisible] = useState(false)
  const [isDataEnd, setIsDataEnd] = useState(false)

  const URL = 'https://swapi.dev/api/people/'

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setSpinnerVisible(true)
    try {
      const response = await axios.get(URL)
      const { results } = response.data

      if (response.status === 200) {
        setPage(page + 1)
        setData([...data].concat(results))
      }
    } catch (err) {
      console.log(err)
      setIsDataEnd(true)
    }
  }

  return (
    <Container className='mt-3 mb-3'>
      <PeopleList data={data} />
      {spinnerVisible && <Spinner animation='border' />}
      {!isDataEnd ? (
        !spinnerVisible && <Button onClick={fetchData}>Carregar mais</Button>
      )
        :
        <h3 style={{ color: 'red' }}>Sem mais dados</h3>
      }
    </Container>
  )
}

export default App
