import { useEffect, useState } from "react";
import { explorePublications } from "../lensQueries/explorePublications";

const useExplorePublications = () => {
  const [page, setPage] = useState('{"timestamp":1,"offset":0}');
  const [data, setData] = useState([]);
  const [lastImg, setLastImg] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedButton, setSelectedButton] = useState("LATEST");

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      if (selectedButton) {
        try {
          const request = {
            sortCriteria: selectedButton, //You can filter by TOP_COMMENTED | TOP_COLLECTED | TOP_MIRRORED | LATEST
            noRandomize: true,
            sources: ["5bba5781-78b5-4927-8d2f-122742817583"],
            publicationTypes: ["POST"],
            cursor: page,
            limit: 24,
          };
          const response = await explorePublications(request); // To get next result replace the cursor with the value of response.pageInfo.next
          setData(response.data?.explorePublications);
          setLoading(false);
        } catch (err) {
          console.log(err);
        }
      }
    };
    init();
  }, [selectedButton, page]);

  const handleClick = (button) => {
    setPage('{"timestamp":1,"offset":0}');
    setLastImg([]);
    setSelectedButton(button);
  };

  const loadMore = () => {
    setPage(data?.pageInfo?.next);
    setLastImg([...lastImg, ...data?.items]);
  };

  return {
    data,
    lastImg,
    loading,
    selectedButton,
    handleClick,
    loadMore,
  };
};

export default useExplorePublications;
