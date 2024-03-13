import './Print.css';
function Print(){
    function handleclick(){
       return window.print()
    }
    return(
        <button onClick={handleclick} className="btn-print">Print</button>
    )
}
export default Print;