function namify(users) {
  let newArray = [];
  users.forEach(element => {
    newArray.push(element.name);
  });
  return newArray;
}
