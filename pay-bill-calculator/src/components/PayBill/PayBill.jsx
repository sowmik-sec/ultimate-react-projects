export default function PayBill({ bill, myService, friendService }) {
  return (
    <h1>
      You pay ${bill + bill * ((myService + friendService) / 2 / 100)} ($
      {bill} + ${bill * ((myService + friendService) / 2 / 100)})
    </h1>
  );
}
