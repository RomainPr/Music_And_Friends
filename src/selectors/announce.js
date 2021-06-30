export function findAnnounce(announces, searchedIdAnnounce) {
  const announce = announces.find((announceId) => {
    console.log(`announceId.id =`, announceId.title)
    return announceId.title === searchedIdAnnounce;
  });
  console.log(`announce`, announce)
  return announce;
}
