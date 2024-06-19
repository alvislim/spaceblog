import { useParams } from "react-router-dom";

const SpaceArticle = () => {
  const { id } = useParams();
  console.log(id);
  return <div>hi</div>;
};

export default SpaceArticle;
