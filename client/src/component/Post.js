const Post = (props) => {
    const item = props.item;
    //console.log('deleted Id',props.uniqueId)
    return(
        <tr key={props.postNo}>
            <td>{props.postNo}</td>
            <td>{item.title}</td>
            <td><button
                className="btn btn-primary" 
                onClick={()=>{props.onclickHandler(props.uniqueId)}}
            >Edit</button><button className="btn btn-primary" onClick={()=>{props.onClickDeleteHandler(props.index)}}>Delete</button></td>
        </tr>
    )
    
}
export default Post;