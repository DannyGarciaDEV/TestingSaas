// deleteTask.test.js
const mockDatabaseFunction = require("../utils/deleteTask");

describe("deleteTask", () => {
  it("should delete a task successfully", async () => {
    const taskId = "exampleTaskId";
    const mockDeleteFunction = mockDatabaseFunction(true);

    // Call the deleteTask function with the task ID and mocked function
    const result = await mockDeleteFunction(taskId);

    // Assert that the task was deleted successfully
    expect(result).toEqual(true);
    // You may add more assertions here if needed
  });

  // Add more test cases as needed, for different scenarios
});
