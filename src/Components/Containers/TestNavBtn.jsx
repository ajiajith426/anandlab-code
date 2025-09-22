import { Link, useNavigate } from "react-router-dom";

function TestNavBtn(props) { 
    const navigate = useNavigate() 
    const viewDetails = () => {
        if(props.data.IsPackage === 'Yes') {
            navigate(`/package/${props.data.TestSlug}`,{
                state : {
                    test_type : 'package'
                }
            })
        } else {
            navigate(`/test/${props.data.TestSlug}`,{
                state : {
                    test_type : 'test'
                }
            })
        }
    }
    return (
        <button className="bg-trsnper ml-2" onClick={viewDetails}>
            <small>Know More</small>
        </button>
    );
}


export function TestNavCard(props) { 
    const navigate = useNavigate() 
    const viewDetails = () => {
        if(props.data.IsPackage === 'Yes') {
            navigate(`/package/${props.data.TestSlug}`,{
                state : {
                    test_type : 'package'
                }
            })
        } else {
            navigate(`/test/${props.data.TestSlug}`,{
                state : {
                    test_type : 'test'
                }
            })
        }
    }
    return (
        <div className="link">
            <Link to="viewDetails">ss</Link>
            {/* {props.children} */}
        </div>
    );
}

export default TestNavBtn;
