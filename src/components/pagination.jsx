/* eslint-disable react/prop-types */
export default function Pagination({ numPage, setNumPage }) {
  const next = () => {
    setNumPage((numPage) => numPage + 1);
  };


  const prev = () => {
    if (numPage > 1)
      setNumPage((numPage) => numPage - 1);
    else setNumPage((numPage));
  };

  return (


    <div className="container text-center my-5">
      <div className="row">
        <div className="col">

          <button onClick={prev} type="button" className="btn btn-primary">
            Previous
          </button>
        </div>

        <div className="col">
          <button onClick={next} type="button" className="btn btn-primary">
            Next
          </button>
        </div>

      </div>
    </div>

  )
}

export { Pagination }