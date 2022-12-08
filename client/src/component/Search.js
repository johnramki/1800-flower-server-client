
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';

import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchPost, setFilter, postDelete, setInputSearchValue } from "../store/post-slice";
import Form from "./Form";
import Posts from "./Posts";
import styles from './post.module.css';
export const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [postId, setPostId] = useState(0);

  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const auto = useSelector((state) => state.auto);
  const inputSearchValue = useSelector((state) => state.inputSearchValue);
  const filterBy = useSelector((state) => state.post.filter.toLowerCase());

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  const togglePopup = (popup) => {
    setIsOpen(!isOpen);
  };

  const filterPost = post.post.filter((post) => {
    return filterBy ? post.title.toLowerCase().includes(filterBy) : true;
  });

  const onClikPostHandler = (id) => {
    setIsOpen(!isOpen);
    setPostId(id);
  }

  const onClickDeleteHandler = (id) => {
      dispatch(postDelete(id));
  }

  return (
    <section className="section">
      <div className="container table-responsive py-5">
        <div>
          <div
            className={styles.grouped}
            
          >
            <Stack spacing={2} sx={{ width: 300 }}>
              <Autocomplete
                id="free-solo-demo"
                sx={{ width: 1100 }}
                onChange={(event, newValue) => {
                  console.log(newValue);
                  dispatch(setFilter(newValue))
                }}
                onInputChange={(event, newInputValue) => {
                  console.log("Test",newInputValue)
                  dispatch(setInputSearchValue(newInputValue))
                }}
                freeSolo
                options={post.auto.map((option) => option.label)}
                renderInput={(params) => <TextField {...params} label="Post Search" />}
              />
            </Stack>
          </div>
        </div>
        <div style={{gap:"1rem",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))"}}>
        {filterPost &&
              filterPost.map((item, index) => (
                <Posts key={item.id} index={index} onClickDeleteHandler={onClickDeleteHandler}  onclickHandler={onClikPostHandler} uniqueId={item.id} postNo={index+1} item={item} />
              ))}
        </div>
        {filterPost.length === 0 && <p>No Records Found!!!</p>}
      </div>
      {isOpen && <Form id={postId} handleClose={togglePopup} />}
    </section>
  );
};
