async function getDecadev(token) {
  const api = `/api/get-decadev/${token}`;
  let response = await fetch(api);
  return await response.json();
}

export { getDecadev };
