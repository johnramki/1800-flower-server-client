import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Post = (props) => {
    const item = props.item;

    const typostyle = {
        display:"-webkit-box",
        WebkitBoxOrient : "vertical",
        WebkitLineClamp :"2",
        overflow : "hidden"
    }

    const typostyledesc = {
        display:"-webkit-box",
        WebkitBoxOrient : "vertical",
        WebkitLineClamp :"6",
        overflow : "hidden"
    }
    
    return(
        <Card style={{position:'relative'}} sx={{ maxWidth: 345,minHeight:260 }}>
            <CardContent>
                <Typography style={typostyle}  gutterBottom variant="h5" component="div">
                {item.title}
                </Typography>
                <Typography style={typostyledesc}  variant="body2" color="text.secondary">
                {item.body}
                </Typography>
            </CardContent>
            <CardActions style={{position:'absolute',bottom:'0px'}}>
                <Button variant="contained" style={{marginLeft: "100px"}}onClick={()=>{props.onclickHandler(props.uniqueId)}} size="small">Edit</Button>
                <Button variant="contained"  onClick={()=>{props.onClickDeleteHandler(props.index)}} size="small">Delete</Button>
            </CardActions>
        </Card>
    )
    
}
export default Post;
