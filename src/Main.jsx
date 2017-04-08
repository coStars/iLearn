import React from 'react'
import {render} from 'react-dom'
import LearnTable from './LearnTable.jsx'
import LearnForm from './LearnForm.jsx'
import store from './reducer.js'
const Main = (props)=>{
    function removeTeching(id) {
        store.dispatch({type: 'DELETE', payload: id})
    }
    return (
        <div>
            <h1>ILearn</h1>
            <LearnForm />
            <LearnTable learnList={props.data} onRemove={removeTeching.bind(this)}/>
        </div>
    )
}
export default Main
