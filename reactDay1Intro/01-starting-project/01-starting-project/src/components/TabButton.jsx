export default function TabButton({children,onSelect}){
    // function handleClick(){
    //     console.log("Handle Click");
    // }
    // reuseable button code which button click on when click---
    return (
       <li>
        <button onClick={onSelect}>{children}</button>
       </li>
    )
}