import DeleteIcon from '@mui/icons-material/Delete';

function KeeperNotes(props){


    function handleDel(){
        props.delete(props.id)
    }

return(
    <div className="mainNotes" id={props.id}>
        <h2>{props.title}</h2>
        <p>{props.content}</p>

        <button onClick={handleDel}> <DeleteIcon/></button>

    </div>

)

}
export default KeeperNotes