export function missingBody(res) {
  return res.status(401).json({
    error: {
      code: "server/bad-request",
      message: "Missing arguments in the request body.",
    },
  });
}
