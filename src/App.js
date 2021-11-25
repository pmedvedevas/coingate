import { Layout } from "./components/Layout";
import { ContentContainer } from "./components/ContentContainer";

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <ContentContainer />
      </Layout>
    </div>
  );
}

export default App;
