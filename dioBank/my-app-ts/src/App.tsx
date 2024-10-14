import { Card } from './components/Card';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Layout } from './components/Layout';

function App() {
  return (
    <Layout>
      <Card
      id={2}
      paragraph='HTML'
      details='TS HTML para frontend'/>
    </Layout>
  );
}

export default App;
