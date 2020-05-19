import React from "react";

import { List, Item } from "./styles.js";
import Category from "./../Category";
import { categories } from "../../../api/db.json";
const ListOfCategories = () => {
  return (
    <div>
      <List>
        {categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        ))}
      </List>
    </div>
  );
};

export default ListOfCategories;
