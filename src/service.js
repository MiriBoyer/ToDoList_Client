import axios from 'axios';

axios.interceptors.response.use(
  function (response)
  {return response},function(error){
    if(error.response.status==401)
    return (window.location.href="/login")
    return Promise.reject(error)
  }
)



function saveAccesToken(authResult){
localStorage.setItem("Token",authResult.token)
}
function saveAuthorizationBearer(){
  const accesToken=localStorage.getItem("Token")
  if(accesToken)
  axios.defaults.headers.common["Authorization"]=`Bearer ${accesToken}`;
}

export default {
  getTasks: async () => {
    const result = await axios.get("/toDo")    
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    const result = await axios.post(`/toDo`,{name})    
    return result.data;
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
    const result = await axios.put(`/toDo/${id}`)    
    return result.data;
  },

  deleteTask:async(id)=>{
    console.log('deleteTask')
    const result = await axios.delete(`/toDo/${id}`)    
    return result.data;
  }
};
