import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { downloadPosts } from "@/shared/store/saga/posts";
import { useEffect } from "react";

const SagaPage = () => {
  const dispatch = useAppDispatch();
  const { load, error, posts } = useAppSelector((state) => state.saga);

  useEffect(() => {
    dispatch(downloadPosts());
  }, [dispatch]);

  return (
    <>
      <div className="bg-slate-200">SagaPage!</div>
      <main>
        {error ? (
          <p>Error</p>
        ) : load ? (
          <p>Loading...</p>
        ) : (
          posts.map((post) => (
            <div className="bg-red-400" key={post.id}>
              {post.title}
            </div>
          ))
        )}
      </main>
    </>
  );
};

export default SagaPage;
