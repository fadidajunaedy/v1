const Badge = ({ key, children }) => {
  return (
    <>
      <span
        key={key}
        className="bg-primary text-white py-2 px-4 text-[0.6rem] md:text-xs font-semibold rounded-md uppercase"
      >
        {children}
      </span>
    </>
  );
};

export default Badge;
