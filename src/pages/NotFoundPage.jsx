import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className="text-yellow-400 fa-4xl mb-4 text-6xl"/>
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5">페이지가 존재하지 않습니다!</p>
      <Link to="/"
      className="text-white bg-indigo-700 hover:bg-indigo-900 
      rounded-md px-3 py-2 mt-4">
        뒤로 가기
      </Link>
    </section>

  )
}

export default NotFoundPage
