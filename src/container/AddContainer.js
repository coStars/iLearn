import { connect } from 'react-redux'
import LearnForm from '../LearnForm.jsx'
import {newPost} from '../fetch.js'
const mapDispatchToProps = () => {
  return {
    addTech  : (data) => {
      newPost(data)
    }
  }
}

const addTech = connect(
  mapDispatchToProps
)(LearnForm)

export default addTech
