import jwt from "jsonwebtoken";

const payload = "decadevs";

const TOKEN = {
  async sign(id: string) {
    return jwt.sign({ id: id }, payload, { expiresIn: "302400s" });
  },
  async verify(token: string) {
    return jwt.verify(token, payload);
  },
};

export { TOKEN };
