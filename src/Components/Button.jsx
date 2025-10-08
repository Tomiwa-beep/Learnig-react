function change({Label, color, disabled}) {
  const ChangeStyle = {
    color: color,
  };

  if (disabled == false) {
    Label = "Disabled Button";
    return (
      <button onClick={disabled} color="gray">
        {Label}
      </button>
    );
  }
}

export default Button;
