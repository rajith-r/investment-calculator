export default function UserInput({title,onModify,initialValue}){
    return(
    <>
    <label>{title}</label>
    <input type="number" value={initialValue} onChange={onModify}/>
    </>
    );
}