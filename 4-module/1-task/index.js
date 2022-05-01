function makeFriendsList(friends) {
  const UL = document.createElement('ul');
  for (let friend of friends) {
    UL.innerHTML += `<li>${friend.firstName} ${friend.lastName}</li>`;
  }
  return UL;
}
