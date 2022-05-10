import { useEffect, useState } from 'react'
import { Paper, IconButton, InputBase  } from '@mui/material'
import { Search  } from '@mui/icons-material';
import Services from './services'; 

import Images from './Images';

const Home = () => {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    
    const handleSubmit = () => {
        if(query === ""){  
           return
        }   
        Services.get(query)
        .then(response => {
            setData(response.data.data)
        })
	}

    useEffect (() => {
        Services.get()
        .then (response => {
            setData(response.data.data)
        });
    },[])

    return (
        <div>
            <div
                style={{
                    display:'flex',
                    justifyContent:'center',
                    marginTop:50
                }}
            >
                <Paper
                    component="form"
                    variant="outlined"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search photo"
                        inputProps={{ 'aria-label': 'search google maps' }}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)} 

                    />
                    <IconButton  sx={{ p: '10px' }} aria-label="search" onClick={handleSubmit} >
                        <Search />
                    </IconButton>       
                </Paper>
            </div>
            {data &&
            <>
                <Images data={data} />
                <div style={{
                    display:'flex',
                    justifyContent:'center',
                    marginBottom:50
                }}>
                    <footer style={{
                        display:'flex',
                        justifyContent:'center',
                        textAlign:'center'

                    }}>
                        <p>Sutandi Azhari &copy; 2022 | Photo source from <a href="https://flickr.com" target="_blank">Flickr</a></p>
                    </footer>  
                </div>    
            </> 
            }
        </div>
    )
}

export default Home