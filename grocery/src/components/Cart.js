import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import Checkbox from '@mui/material/Checkbox'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'

function Cart({items,remove}) {

    return (
        <>
          {items.map((item)=>{
               const {id,title} = item

              return(
                <List key={id}>
                    <ListItem disablePadding  secondaryAction={
                        <IconButton edge='end' onClick={()=>remove(id)}>
                            <DeleteIcon />
                        </IconButton>
                    }>
                        <ListItemButton>
                            <ListItemIcon>
                                <Checkbox edge='start' disableRipple/>
                            </ListItemIcon>
                            <ListItemText>
                            {title}
                    </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    
                </List>
              )
          })}  
        </>
    )
}

export default Cart
