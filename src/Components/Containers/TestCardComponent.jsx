import clock from "./../../assets/images/clk.png";
import calnder from "./../../assets/images/cal.png"; 
import CartBtn from '../Containers/CartBtn' 
import TestNavBtn from "./TestNavBtn";
export default function TestCardComponent(props) {
  return (
    <div className="">
      <div className="cmn-box-str">
        <div className="case p-0 p-3">
          <h3>
            { props.test !== undefined ? props.test.TestName.substring(0,40) : 'Allergen, Individual-Drug, Diclofenac' }  
          </h3>
          <ul>
            <li>
              <img src={clock} alt="" className="img-fluid" />
              { props.test !== undefined ? props.test.BasicInstruction.substring(0,50) : '2 ml of serum from SST. Ship refrigerated.' }   
            </li>
            <li>
              <img src={calnder} alt="" className="img-fluid" />
              { props.test !== undefined ? props.test.TestSchedule.replaceAll(',',', ') : 'Daily' }.
            </li>
          </ul>
          <h5> &#8377; { props.test !== undefined ? props.test.TestPrice : 1400 }</h5>
          <p className="d-flex">
            {
              props.test !== undefined ?
                <CartBtn getData={props.test} testData={props.test}/>
              :
              null
            } 
            <TestNavBtn data={props.test !== undefined ?  props.test : null }/>  
          </p>
        </div>
      </div>
    </div>
  );
}
