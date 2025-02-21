import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import Natask from "../data/natask.md";
import Dreamcost from "../data/dreamcost.md";
import Breadcrumb from "../components/common/Breadcrumb";

const contents = [
  {
    name: "natask",
    content: Natask,
  },
  {
    name: "dreamcost",
    content: Dreamcost,
  },
];

const Project = () => {
  const { project } = useParams();

  return (
    <>
      <main className="md-container py-4 lg:py-24">
        <Breadcrumb />
        <ReactMarkdown>
          {contents.find((content) => content.name === project).content}
        </ReactMarkdown>
      </main>
    </>
  );
};

export default Project;
