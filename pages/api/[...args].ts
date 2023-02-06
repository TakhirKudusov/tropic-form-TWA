import { createProxyMiddleware } from "http-proxy-middleware";

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = createProxyMiddleware({
  // target: 'http://localhost:4010/',
  target: "http://94.250.252.12:1488",
  pathRewrite: {
    "^/api/": "/", // remove base path
  },
});

export default proxy;
