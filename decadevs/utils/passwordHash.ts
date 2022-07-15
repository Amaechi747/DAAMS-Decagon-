import bcrypt from "bcrypt";

const PASSWORD = {
  // return the hash password
  async hash(password: string) {
    return bcrypt.hash(password, 10);
  },

  //compare password with hash
  async compare(password: string, hash: string) {
    return bcrypt.compare(password, hash);
  },
};

export { PASSWORD };
