  import {dataUpdate,getAll} from './fetch.js'
  function updateData(data){
    dataUpdate(data);
    getAll()
  }
  export default updateData
