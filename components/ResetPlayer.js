const ResetPlayer = ({ onReset }) => {
  return (
    <div className="mx-5 p-3 border border-orange-100 rounded-md text-xs">
      <p className="text-center text-orange-100">
        Reset Player ?{" "}
        <button onClick={onReset}>
          <span className="text-orange-700 hover:text-red-700 font-bold">
            Ho&apos;oh
          </span>
        </button>
      </p>
    </div>
  )
}

export default ResetPlayer
