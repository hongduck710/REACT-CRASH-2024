import { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';
import { Link } from "react-router-dom";


const JobListing = ({ job }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);
/* showFullDecription의 초기상태 false, setShowFullDescription함수는 상태를 변경할 때 사용됨*/
    let description = job.description;
  
    if (!showFullDescription) { // showFullDescription이 false일 때 조건이 참. true가 아니라면,  즉, false라면(useState가 참인지 거짓인지 따지는 것이 아님!!)
      description = description.substring(0, 90) + '...';
    }

    return (
    <div className='bg-white rounded-xl shadow-md relative'>
        <div className='p-4'>
            <div className='mb-6'>
                <div className='text-gray-600 my-2'>{job.type}</div>
                <h3 className='text-tl font-bold'>{job.title}</h3>
            </div>

            <div className='mb-5'>{ description }</div>

            <button onClick={() => setShowFullDescription((prevState) => !prevState) } 
            className="text-indigo-500 mb-5 hover:text-indigo-600">
                { showFullDescription ? 'Less' : 'More' }
            </button>
{/* prevState: 현재 상태값. 이전에 저장된 showFullDescription 값. 
!prevState:현재 값의 반대 값. true에서 false로, false에서 true로 */}
            <h3 className='text-indigo-500 mb-2'>{job.salary} / Year</h3>
            <div className='border border-gray-100 mb-5'></div>
            <div className='flex flex-col lg:flex-row justify-between mb-4'>
                <div className='text-orange-700 mb-3'>
                    <FaMapMarker className='inline text-lg mb-1 mr-1' />
                    {job.location}
                </div>
                <Link 
                    to={`/job/${job.id}`}
                    className='h-[36px] bg-indigo-500 
                    hover:bg-indigo-600 text-white px-4 
                    py-2 rounded-lg text-center text-sm'
                    >
                        Read More
                </Link>
            </div>
        </div>
    </div>
    );
}

export default JobListing;