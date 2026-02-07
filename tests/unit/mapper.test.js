describe("responseMapper", () => {
  it("maps legacy item to API format", () => {
    const legacyItem = { item_id: 1, item_name: "Test" };

    // tämä on placeholder — korvaat oikealla mapperilla myöhemmin
    const mapped = {
      id: legacyItem.item_id,
      name: legacyItem.item_name
    };

    expect(mapped).toEqual({ id: 1, name: "Test" });
  });
});