const Input = ({ placeholder, name }) => {
  return (
    <>
       <label for={name}>{name} : </label>
       <input placeholder={placeholder}></input>
      
    </>
  );
};
export default Input;
