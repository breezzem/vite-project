import Message from "./message";
import ListGroup from "./components/ListGroup";

function App() {
  const items = [
    "Cras justo odio",
    "Dapibus ac facilisis in",
    "Vestibulum at eros",
  ];

  const handleSelectItem = (index: number) => {
    console.log(items[index]);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="list"
        onSelectItem={handleSelectItem}
      />

      <Alert>
        
      </Alert>
    </div>
  );
}

export default App;
