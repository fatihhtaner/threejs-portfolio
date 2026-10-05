const Button = ({ name, isBeam = false, containerClass = "", href }) => {
  const Tag = href ? "a" : "button";

  return (
    <Tag href={href} className={`btn ${containerClass}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping" />
          <span className="btn-ping_dot" />
        </span>
      )}
      {name}
    </Tag>
  );
};

export default Button;
