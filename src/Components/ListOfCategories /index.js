import React, { useEffect, useState } from "react";

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
    <div>
      <List>
        {valueCategories.map((category) => (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        ))}
      </List>
    </div>
  );
};

export default ListOfCategories;
