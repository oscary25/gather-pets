import React, { useEffect, useState, Fragment } from "react";

import { List, Item } from "./styles.js";
import Category from "./../Category";

const ListOfCategories = () => {
  const [valueCategories, setValueCategories] = useState([]);

  useEffect(() => {
    window
      .fetch("https://petgram-server-edsf8xpy2.now.sh/categories")
      .then((res) => res.json())
      .then((response) => {
        setValueCategories(response);
      });
  }, []);

  return (
    <Fragment>
      <List>
        {valueCategories.map((category) => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))}
      </List>
    </Fragment>
  );
};

export default ListOfCategories;
