import { useState } from "react";
import { Bill, PayBill, Reset, Service } from "./components";

const options = [
  {
    id: 1,
    title: "It was good(10%)",
    value: 10,
  },
  {
    id: 2,
    title: "Very enjoyable(15%)",
    value: 15,
  },
  {
    id: 3,
    title: "Absolutely amazing!(20%)",
    value: 20,
  },
];

function App() {
  const [bill, setBill] = useState(0);
  const [myService, setMyService] = useState(10);
  const [friendService, setFriendService] = useState(10);

  const handleMyServiceChange = (value) => {
    setMyService(value);
  };

  const handleFriendServiceChange = (value) => {
    setFriendService(value);
  };

  const handleReset = () => {
    setBill(0);
    setMyService(0);
    setFriendService(0);
  };

  return (
    <>
      <Bill bill={bill} setBill={setBill} />
      <Service
        text={"How did you like the service?"}
        options={options}
        onServiceChange={handleMyServiceChange}
      />
      <Service
        text={"How did your friend like the service?"}
        options={options}
        onServiceChange={handleFriendServiceChange}
      />
      <PayBill
        bill={bill}
        myService={myService}
        friendService={friendService}
      />
      <Reset onReset={handleReset} />
    </>
  );
}

export default App;
