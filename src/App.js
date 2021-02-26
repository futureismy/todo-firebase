import './App.scss';
import TextField from "@material-ui/core/TextField"
function App() {
  return (
    <div className="App" >
   <div style={{
     display:'flex',
     justifyContent:"center",
     flexDirection:'column',
     alignItems:'center'    
     }}>
   <h1>😝 Trần Minh Phú Todos App 😂</h1>
    <TextField id='standard-basic' 
    label='Write a Todo' 
    style={{maxWidth:'300px', width:'90vw'}}/>
   </div>
    </div>
  );
}

export default App;
