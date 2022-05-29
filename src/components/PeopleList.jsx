import React from 'react'
import PeopleItem from './PeopleItem'

const PeopleList = ({ data }) => {
  return (
    <React.Fragment>
        {data.length > 0 ?
            (
                data.map(person => <PeopleItem key={person.birth_year + person.name} name={person.name} />)
            )
            :
            <h3>Sem dados!</h3>
        }
    </React.Fragment>
  )
}

export default PeopleList