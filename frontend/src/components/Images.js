import { ImageList,  ImageListItem, ImageListItemBar,IconButton,  } from '@mui/material';
import { Info as InfoIcon } from '@mui/icons-material';

const Images = (props) => {

  return (
    <div style={{ 
      display:'flex',
      justifyContent:'center'
    }}>
      <ImageList 
        sx={{ width: '60%', margin:10}}
        cols={3}  
      >
        {props.data.items && props.data.items.map((item) => (
          <ImageListItem key={item.link}> 
            <img 
              src={item.media.m}
              style={{
                height:250,
              }}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      
    </div>
  )
}


export default Images