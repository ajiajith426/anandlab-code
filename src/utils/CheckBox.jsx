const CheckBox = ({ value, name , setFilter, setBtnClear }) => { 
    const handler   = (element) => { 
        var array = []
        var checkboxes = document.querySelectorAll(`.${element.name}_checkbox:checked`)
        for (var i = 0; i < checkboxes.length; i++) {
            array.push(checkboxes[i].value)
        }
        setFilter(element.name, array)
        setBtnClear(checkboxes.length > 0 ? true : false)
    }
    return (
        <input type="checkbox" name={name} className={`${name}_checkbox`} value={value} onChange={(e) => handler(e.target)} />
    )
}
export default CheckBox