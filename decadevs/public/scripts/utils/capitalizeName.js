function capitalizeName(name) {
  name = name.split("");
  name[0] = name[0].toUpperCase();
  return name.join("");
}

export { capitalizeName };
