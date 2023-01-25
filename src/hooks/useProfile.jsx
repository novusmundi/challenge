import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserPosts } from "../lensQueries/getUserPosts";
import { getUserProfile } from "../lensQueries/getUserProfile";

const useProfile = () => {
  const [infoUser, setInfoUser] = useState([]);
  const [infoPostUser, setInfoPostUser] = useState([]);
  const [lastPostUser, setLastPostUser] = useState([]);
  const [page, setPage] = useState(null);

  let { iduser } = useParams();

  useEffect(() => {
    const init = async () => {
      try {
        const response = await getUserProfile(iduser);
        setInfoUser(response);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, []);

  useEffect(() => {
    const initPost = async () => {
      try {
        const response = await getUserPosts(infoUser?.id, page);
        setInfoPostUser(response);
      } catch (error) {
        console.log(error);
      }
    };

    initPost();
  }, [infoUser, page]);

  const loadMore = () => {
    setPage(infoPostUser?.data?.publications?.pageInfo?.next);
    let newItems = infoPostUser?.data?.publications?.items;
    newItems = newItems.filter(
      (item) => !lastPostUser.some((i) => i.id === item.id)
    );
    setLastPostUser([...lastPostUser, ...newItems]);
  };

  return {
    infoUser,
    infoPostUser,
    lastPostUser,
    loadMore,
  };
};

export default useProfile;
