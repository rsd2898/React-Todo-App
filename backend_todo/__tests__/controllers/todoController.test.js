const Controller = require("../../controllers/todoControllers");

jest.mock("../../Models/todomodel.js");

const mockSave = jest.fn();
const mockFind = jest.fn();

const Todo = require("../../Models/todomodel");

Todo.find = mockFind;
Todo.mockImplementation(()=>({
    save: mockSave
}))

describe("When todo controller is invoked", () => {
    let req, res;

    beforeEach(() => {
        req = {
            body: {},
            params: {}
        };
        res = {
            json: jest.fn(() => res),
            status: jest.fn(() => res),
        };
    });

    describe("For getTodos function", () => {
        it("If everything goes right, it should return me all todos", async () => {
            const mockTodos = [
                { id: 0, title: "Todo 1", completed: false },
                { id: 1, title: "Todo 2", completed: false },
                { id: 2, title: "Todo 3", completed: false }
            ];
            mockFind.mockResolvedValue(mockTodos);
            await Controller.getTodos(req, res); 

            expect(mockFind).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(mockTodos);
        });

        it("should handle errors if something goes wrong", async () => {
            const errorMessage = "Something went wrong, please try again";
            mockFind.mockRejectedValue(new Error(errorMessage));

            await Controller.getTodos(req, res);
            
            expect(mockFind).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
        });
    });

    describe("For addTodo Function", () => {
        it("should create a new Todo", async () => {
            const newTodo = { _id: "1", title: "New Todo" };
            req.body = { title: "New Todo" };
            mockSave.mockResolvedValue(newTodo);
    
            // Corrected line
            await Controller.addTodo(req, res); // Change todoController to Controller
            
            expect(mockSave).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(newTodo);
        });

        it("should handle errors if something goes wrong", async () => {
            const errorMessage = "Something went wrong, please try again";
            mockSave.mockRejectedValue(new Error(errorMessage));

            await Controller.addTodo(req, res);
            
            expect(mockSave).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
        });

    });

});