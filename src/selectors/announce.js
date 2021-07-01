export function findAnnounce(announces, searchedIdAnnounce) {
  const announce = announces.find((announceId) => {
    return announceId.title === searchedIdAnnounce;
  });
  return announce;
}
