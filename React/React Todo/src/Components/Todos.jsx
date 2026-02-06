export const Todos = ({props}) => {
    const {todo} = props;
    console.log('Todo List comp' , todo);
    return(
        <>
          <h1>list of todos</h1>
        </>
    );
};