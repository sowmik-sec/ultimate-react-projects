/* eslint-disable react/prop-types */
function Button({ dispatch, isActive }) {
  return (
    <button
      onClick={() => {
        dispatch({ type: "open" });
      }}
      disabled={isActive}
    >
      Open account
    </button>
  );
}

export default Button;
