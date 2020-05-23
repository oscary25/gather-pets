import React, { useEffect, useRef, Fragment, useState } from "react";

import { Article, ImgWrapper, Img } from "./styles";
import useLocalStorage from "../Hooks/useLocalStorage";
import FavButton from "../FavButton/index";
import ToggleLikeMutation from "../hoc/ToggleLikeMutation";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const ref = useRef(null);
  const key = `like-${id}`;
  const [show, setShow] = useState(false);
  const [liked, setLiked] = useLocalStorage(key, false);

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });
    observer.observe(ref.current);
  }, [ref]);

  return (
    <div>
      <Article ref={ref}>
        {show && (
          <Fragment>
            <a href={`/?detail=${id}`}>
              <ImgWrapper>
                <Img src={src} alt="" />
              </ImgWrapper>
            </a>

            <ToggleLikeMutation>
              {(toggleLike) => {
                const handleFavClick = () => {
                  !liked && toggleLike();
                  setLiked(!liked);
                };
                return (
                  <FavButton
                    liked={liked}
                    likes={likes}
                    onClick={handleFavClick}
                  />
                );
              }}
            </ToggleLikeMutation>
          </Fragment>
        )}
      </Article>
    </div>
  );
};

export default PhotoCard;
