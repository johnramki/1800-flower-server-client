import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editPost } from "../store/post-slice";

const Form = (props) => {
  const inputName = useRef();
  const textareaName = useRef();
  const dispatch = useDispatch();
  const postId = props.id;
  const post = useSelector((state) => state.post);
  let item = post.post.find((x) => x.id === postId);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(editPost({ title: inputName.current.value, id: postId}));
    props.handleClose();
  };
  return (
    <div className="popup-box">
      <div className="box">
        <span
          className="close-icon"
          onClick={props.handleClose}
        >
          x
        </span>
        <form>
          <div className="form-group">
            <label htmlFor="Title">Post Title</label>
            <input
              type="text"
              className="form-control"
              defaultValue={item.title}
              ref={inputName}
              name="title"
              placeholder="Title"
              autoComplete="off"
            ></input>
          </div><br></br>
          <div className="form-outline">
          <label className="form-label" for="textAreaExample">Post Description</label>
          <textarea ref={textareaName} defaultValue={item.body} disabled className="form-control" id="textAreaExample1" rows="4"></textarea>
          
        </div>
          <button
            style={{ margin: "10px" }}
            onClick={submitHandler}
            className="btn btn-primary"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
