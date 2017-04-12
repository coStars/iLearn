import Display from './index.jsx'
import {dataUpdate,getAll} from './fetch.js'
function updateData(data){
   dataUpdate(data);
   Display();
   getAll()
  }
export default updateData
