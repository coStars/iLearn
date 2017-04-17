import { connect } from 'react-redux'
import LearnTable from '../LearnTable.jsx'
import UpdateForm from '../UpdateForm.jsx'
import {deleteItem, dataUpdate} from '../fetch.js'

import store from '../store.js'

const mapStateToProps = (store) => {
  console.log('state from mapStateToProps in DisplyContainer',store);
    return { learnList: store.techs }
}

const mapDispatchToProps = () => {
  return {
    onRemove  : (id) => {
      deleteItem(id)
    },
    update :UpdateForm
  }
}

const dispaly = connect(
  mapStateToProps,
  mapDispatchToProps
)(LearnTable)

export default dispaly
