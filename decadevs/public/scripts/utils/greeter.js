function greeter() {
  const hours = new Date().getHours();
  return hours < 12
    ? "Good morning "
    : hours > 11 && hours < 18
    ? "Good afternoon "
    : "Good evening ";
}

export { greeter };
