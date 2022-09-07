function Button(props) {
  return (
    <button
      type={props.type}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  className: 'btn btn-primary',
};

export default Button;
