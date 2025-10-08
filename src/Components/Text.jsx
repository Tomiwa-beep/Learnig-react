function Text({content, color, size}) {
  const MyStyle = {
    color: color,
    fontSize: size,
  };
  return <p style={MyStyle}>{content}</p>;
}

export default Text;
