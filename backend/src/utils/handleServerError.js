export const handleServerError = (res, error, context = "") => {
  console.error(`[${context}]`, error);
  res.status(500).json({ message: "Internal server error" });
};
