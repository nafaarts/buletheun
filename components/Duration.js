import { currencyFormat } from "../helper/currencyFormat"

const Duration = ({ hour, price }) => {
  return (
    <div className="px-5 mb-4">
      <small className="text-orange-100 text-xs block mb-4">
        Berapa Lama mainnya ?{" "}
      </small>
      <div className="p-3 bg-orange-100 rounded-md text-xs flex justify-between ">
        <span className="font-bold text-orange-900">{hour} Jam aja</span>
        <span className="font-bold text-green-600">
          {currencyFormat(price)}
        </span>
      </div>
    </div>
  )
}

export default Duration
