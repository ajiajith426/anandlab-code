import { CheckBox } from '../../utils';
function GenderFilter({setFilter,setBtnClear}) {
    const genders = ["Male", "Female", "Both & Others"]; 
    return (
        <ul>
            <h4>Genders</h4>
            {genders.map((gender, id) => (
                <li key={id}>
                    <label className="cstm-chkbx">
                        {gender}
                        <CheckBox name="gender" value={gender.charAt(0)} setFilter={setFilter} setBtnClear={setBtnClear} />
                        <span className="checkmark"></span>
                    </label>
                </li>
            ))}
        </ul>
    );
}

export default GenderFilter