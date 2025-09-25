import Header from './components/Hearder';
import MyInfo from './components/MyInfo';
import TechStack from './components/TechStack';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-green-900">
      <div className="max-w-lg mx-auto bg-white min-h-screen">
        <Header />
        <div className="pt-16">
          <MyInfo />
          <TechStack />
        </div>
      </div>
    </div>
  );
}

export default App;
