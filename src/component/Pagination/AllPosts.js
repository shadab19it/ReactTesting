import React, { useEffect, useState } from "react";
import { List, Pagination } from "antd";
import axios from "axios";
import "./Allposts.scss";

const AllPosts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setAllPosts(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  let indexofLastPost = currentPage * postPerPage; //4 * 10 = 40
  let indexofFirstPost = indexofLastPost - postPerPage; // 40  - 10 = 30
  const currentPost = allPosts.slice(indexofFirstPost, indexofLastPost); // 30 to 40

  const onPageChange = (page, pageSize) => {
    setCurrentPage(page);
  };

  let totalPage = allPosts.length / postPerPage;

  return (
    <div className='list-wrapper'>
      <h1>All Posts</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <List
            size='medium'
            bordered
            dataSource={currentPost}
            renderItem={(item) => (
              <List.Item>
                {item.id} : {item.title}
              </List.Item>
            )}
          />

          <div className='pagination' style={{ marginTop: 20 }}>
            <Pagination onChange={onPageChange} defaultCurrent={1} total={allPosts.length} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AllPosts;
