export default function Donation() {
  return (
    <div class="payment">
      <h1 class="payTitle">Personal Information</h1>
      <label>Name and Surname</label>
      <input type="text" placeholder="Bhavesh Gupta" class="payInput" />
      <label>Phone Number</label>
      <input type="text" placeholder="+91 8998439394" class="payInput" />
      <label>Address</label>
      <input type="text" placeholder="Full Address" class="payInput" />
      <h1 class="payTitle">Card Information</h1>
      <input type="password" placeholder="CardNumber" class="payInput" />
      <div class="cardInfo">
        <input type="text" placeholder="mm" class="payInput sm" />
        <input type="text" placeholder="yyy" class="payInput sm" />
        <input type="text" placeholder="cvv" class="payInput sm" />
      </div>
      <button class="payButton">Checkout!</button>
    </div>
  );
}
