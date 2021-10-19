import "./counterstyle.css";
function Showcount(props) {
  return (
    <>

      <div className="container">
        <h1> {props.count} </h1>
        <div className="counter_card">
          <div className="">
          { props.count>0
           ?
           <button className="button-42" onClick={props.decrement}> decrement </button>
           :
          <p>count is  0</p>
      }
            <button className="button-43" onClick={props.increment}> increment </button>
            <h2>simple counter</h2>
          </div>
        </div>
      </div>
    </>
  );
}
export default Showcount;
