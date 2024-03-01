import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { getAllPosts } from "@/shared/store/slice/todosBaseFinal";
import { useEffect } from "react";

const ThunkPage = () => {
  const dispatch = useAppDispatch();

  const posts = useAppSelector((state) => state.posts.posts);
  const load = useAppSelector((state) => state.posts.load);
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <>
      <div className="bg-slate-200">ThunkPage!</div>
      {load === true ? (
        <div> Loading </div>
      ) : (
        <div>
          {posts?.slice(90).map((post) => (
            <div>{post?.title}</div>
          ))}
        </div>
      )}
    </>
  );
};

export default ThunkPage;
