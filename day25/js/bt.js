/*
Bài 3: Chuyển đổi mảng một chiều thành dạng lồng.
*/
var categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];
var categoriesCopy = [...categories];
function getNestedArr(categories, parentId = 0) {
  if (categories.length !== 0) {
    var parentElements = categories.filter(
      (category) => category.parent === parentId
    );

    var result = parentElements.map((item) => {
      const { parent, ...rest } = item;
      const children = getNestedArr(categories, item.id);
      if (children.length > 0) {
        return {
          ...rest,
          children,
        };
      } else {
        return rest;
      }
    });
    return result;
  } else {
    return `This is an empty array!`;
  }
}

console.log(getNestedArr(categories));
