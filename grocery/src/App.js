import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import './App.css';
import { useEffect, useState } from 'react';
import Cart from './components/Cart';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const getLocalStorage = ()=>{
  let list = localStorage.getItem('list')
  if(list){
    return(
      JSON.parse(list)
    )
  }
  else{
    return []
  }
}


function App() {
  const [name, setName] = useState('')
  const [list,setList] = useState(getLocalStorage())

  useEffect(() => {
    localStorage.setItem('list',JSON.stringify(list))
  }, [list])

  const handleInput = (e)=>{
    setName(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!name){

    }else{
    const newName = {id:new Date().getTime().toString(), title:name}
    setList([...list,newName])
    setName('')}
  }

  const handleDelete = (id) =>{
    setList(list.filter((item)=>item.id !== id))
  }

  const handleClear = ()=>{
    setList([])
  }


  return (
    <Container maxWidth='sm'>
    <Box 
    component='form'
     onSubmit={handleSubmit}
      sx={{
        alignItems:'center',
        justifyContent:'center',
        padding:'10px',
        
    }}>
          <Typography variant="h3" align='center'>
      Shopping List
    </Typography>
    <Grid container spacing={2} sx={{justifyContent:'center',paddingTop:'20px'}}>
      <Grid item xs={9}>
          <TextField fullWidth size='small' variant='outlined' placeholder='e.g eggs' value={name} onChange={handleInput} />
      </Grid>
      <Grid item xs={3}>
        <Button  variant='contained' onClick={handleSubmit} fullWidth>
      Add
    </Button>
      </Grid>
    </Grid>
   
    
    </Box>
<Cart items={list} remove={handleDelete}/>
<Button onClick={handleClear}>Clear</Button>
    </Container>
  );
}

export default App;
