export const getItems = (req, res) => {
  res.json([
    { id: 1, name: "Example item A" },
    { id: 2, name: "Example item B" }
  ]);
};