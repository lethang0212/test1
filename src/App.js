import { store } from "./store";
import { Provider } from "react-redux";
import Example from "./aplication";

function App() {
  return (
    <Provider store={store}>
      <Example/>
    </Provider>
  )
}

export default App;