import { Button } from '@chakra-ui/button';
import React from 'react'

const TestItem = React.memo(({id,value}) => {
    console.log(`Rendering TestItem ${id}...`);
    return(
      <div>TestItem {id}. Value: {value}</div>
    );
  });

  const App = () => {

    console.log("Rendering App...");
  
    const [items,setItems] = React.useState([
      { id: 1, value: "INITIAL VALUE" },
      { id: 2, value: "INITIAL VALUE" },
      { id: 3, value: "INITIAL VALUE" },
    ]);
    
    const testItems = items.map((item,index) =>
      <TestItem key={index} id={item.id} value={item.value}/>
    );
    
    const updateTest = (index) => {
      console.clear();
      const item = items[index];
      setItems([...items, item])
    };
    
    return(
      <React.Fragment>
        <div>App</div>
        <Button onClick={()=>{updateTest(0)}}>Update Test 1</Button>
        <Button onClick={()=>{updateTest(1)}}>Update Test 2</Button>
        <Button onClick={()=>{updateTest(2)}}>Update Test 3</Button>
        <div>
          {testItems}
        </div>
      </React.Fragment>
    );
  };
  
export default App;