export default function PayBill({ bill, myService, friendService }) {
  return (
    <>
      {bill > 0 && (
        <h1>
          You pay ${bill + bill * ((myService + friendService) / 2 / 100)} ($
          {bill} + ${bill * ((myService + friendService) / 2 / 100)})
        </h1>
      )}
    </>
  );
}
