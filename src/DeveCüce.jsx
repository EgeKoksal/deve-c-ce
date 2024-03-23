
const DeveCüce = ({ deger, sure, onDeveClick, onCüceClick }) => {
  return (
    <div>
      <h2 className="text-center">{deger}</h2>
      <div className="row mt-3">
        <div className="col-6">
          <button 
            className="btn btn-primary  btn-block" 
            disabled={sure === 0}
            onClick={onDeveClick}>Deve</button>
        </div>
        <div className="col-6">
          <button 
            className="btn btn-danger btn-block" 
            disabled={sure === 0}
            onClick={onCüceClick}>Cüce</button>
        </div>
      </div>
    </div>
  );
};

export default DeveCüce;