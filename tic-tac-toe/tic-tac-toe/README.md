In React Updating state BAsed on old state

setEditing(isEditing=>!isEditing)


update object state immutably
object and array (technically are object) are refrence value in javascript--> you should therefore not mutate them directly-insted craete a (deep copy) first.


example--create a copy via spread operator
const updateuser={...user}
updateuser.name="KNPUR"

lifting state up:
lift the state up to the closest ancestor components that has access to all components that need to work with that state;
