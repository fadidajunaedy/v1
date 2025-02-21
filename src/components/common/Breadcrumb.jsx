import { MdArrowBack } from "react-icons/md";
import { useLocation, Link } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="breadcrumb mb-4">
      <div className="flex items-center gap-2">
        <Link
          to="/"
          className="flex items-center gap-2 cursor-pointer group text-primary font-bold"
        >
          <MdArrowBack className="transition-transform group-hover:-translate-x-2" />
          Fadida Junaedy
        </Link>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return (
            <div key={index} className="flex items-center gap-2">
              <span>/</span>
              {isLast ? (
                name
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")
              ) : (
                <>
                  <Link to={routeTo}>
                    {name
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </Link>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Breadcrumb;
