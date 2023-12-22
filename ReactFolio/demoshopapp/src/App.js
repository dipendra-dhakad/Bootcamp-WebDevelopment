import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';

function App() {
  const response =[

    {
      itemName:"Nirma",
      itemDate:"22",
      itemMonth:"December",
      itemYear:"2023"
    },
    {
      itemName:"Nirma2",
      itemDate:"222",
      itemMonth:"December2",
      itemYear:"20232"
    },
    {
      itemName:"Nirma3",
      itemDate:"223",
      itemMonth:"December3",
      itemYear:"20233"
    },
  ];
  return (
    <div>
     <Card>
      <Item name={response[0].itemName} >Hello jee me hua tumara first items</Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

      <Item name= {response[1].itemName} ></Item>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

      <Item name={response[2].itemName} ></Item>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
    
      <div className="App"> Hello jee</div>
     </Card>
 
    </div>
    
    );
  }
export default App;
