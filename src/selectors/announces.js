export function findAnnounce(announces, searchedIdAnnounce) {
  const announce = announces.find((announceId) => {
    return announceId.id.toString() === searchedIdAnnounce;
  });
  return announce;
}
