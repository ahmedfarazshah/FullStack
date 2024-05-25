import Proptypes from "prop-types"

function List(props){

    const itemsList = props.items
    const category = props.category

    itemsList.sort((a, b)=> a.name.localeCompare(b.name))   // listing in alphabetical order
    // itemsList.sort((a,b)=>a.calories - b.calories) // numeric listing 

    const usingList = itemsList.map(items => <li key={items.id}>{items.name}: &nbsp; <i>{items.calories}</i></li> )





    return(
        <>
{itemsList.length>0 && <div className="cont">
            <h2>{category}</h2>
            <ol>{usingList}</ol>
            </div>}
        </>
    )


}

List.prototype = {
    category : Proptypes.string,
    itemsList : Proptypes.arrayOf(Proptypes.shape({id: Proptypes.number, name: Proptypes.string, calories: Proptypes.number}))
}

export default List