export function findAnnounce(announces, searchedIdAnnounce) {
  const announce = announces.find((announceId) => {
    console.log(`announceId.id =`, announceId.id)
    return announceId.id.toString() === searchedIdAnnounce;
  });
  console.log(`announce`, announce)
  return announce;
}
