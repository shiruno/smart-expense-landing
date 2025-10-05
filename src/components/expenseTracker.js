/* --- Expense Tracker Component --- */
function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [budget, setBudget] = useState(5000); // default monthly budget

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  const remaining = budget - total;

  const addExpense = () => {
    if (!description || !amount) return;
    setExpenses([
      ...expenses,
      { description, amount: parseFloat(amount), category },
    ]);
    setDescription("");
    setAmount("");
  };

  return (
    <section id="tracker" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-6 text-gray-900">Expense Tracker</h3>
        <p className="text-gray-700 mb-8">
          Add your daily expenses and monitor how close you are to your budget.
        </p>

        {/* Input Form */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
          <input
            type="text"
            placeholder="Description"
            className="border rounded-full px-4 py-2 flex-1"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount (₱)"
            className="border rounded-full px-4 py-2 w-32"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <select
            className="border rounded-full px-4 py-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Food</option>
            <option>Transportation</option>
            <option>Utilities</option>
            <option>Leisure</option>
            <option>Others</option>
          </select>
          <button
            onClick={addExpense}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        {/* Summary */}
        <div className="bg-blue-50 p-6 rounded-2xl shadow-md inline-block mb-6">
          <p className="text-lg font-semibold text-gray-800">Monthly Budget: ₱{budget}</p>
          <p className="text-gray-700">Total Spent: ₱{total}</p>
          <p className={`font-medium ${remaining < 0 ? "text-red-600" : "text-green-600"}`}>
            Remaining: ₱{remaining}
          </p>
        </div>

        {/* Expense List */}
        <div className="overflow-x-auto">
          <table className="min-w-full border rounded-lg">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-3 text-left">Description</th>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Amount (₱)</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((e, i) => (
                <tr key={i} className="border-b">
                  <td className="p-3">{e.description}</td>
                  <td className="p-3">{e.category}</td>
                  <td className="p-3">₱{e.amount}</td>
                </tr>
              ))}
              {expenses.length === 0 && (
                <tr>
                  <td colSpan="3" className="p-3 text-gray-400 italic">
                    No expenses recorded yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
