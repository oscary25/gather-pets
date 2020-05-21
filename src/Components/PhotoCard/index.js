import React, { useEffect, useRef, Fragment, useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";

import { Article, ImgWrapper, Img, Button } from "./styles";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
const PhotoCard = ({ id, like = 0, src = DEFAULT_IMAGE }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

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
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} alt="" />
              </ImgWrapper>
            </a>
            <Button>
              <MdFavoriteBorder size="34px" /> Waaoo {like} likes !
            </Button>
          </Fragment>
        )}
      </Article>
    </div>
  );
};

export default PhotoCard;
