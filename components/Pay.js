import { currencyFormat } from "../helper/currencyFormat"

const Pay = ({ total, price }) => {
  return (
    <div className="px-5 mb-4">
      <small className="text-orange-100 text-xs block mb-4">
        Berapa Bayar Seorang ?{" "}
      </small>
      <div className="p-3 bg-orange-100 rounded-md text-xs text-center text-orange-900">
        {total === 0 ? (
          <p>Gausah ko bayar!</p>
        ) : (
          <p>
            Karena yang main {total} orang, berarti bayar{" "}
            <span className="text-green-600 font-bold">
              {Math.ceil(currencyFormat(price / total))}K
            </span>{" "}
            seorang ya.
          </p>
        )}
      </div>
    </div>
  )
}

export default Pay
