import {  useParams, useLoaderData, Link } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';

const JobPage = () => {
    const { id } = useParams();
    const job = useLoaderData();

    return (
        <>
            <section>
                <div className='container m-auto py-6 px-6'>
                    <Link 
                        to='/jobs'
                        className='text-indigo-500 hover:text-indigo-600 flex items-center'>
                        <FaArrowLeft className='mr-2' />
                    </Link>    
                </div>
            </section>
            <section className='bg-indigo-50'>
                <div className='container m-auto py-10 px-6'>
                    <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
                        <main>
                            <div className='bg-white p-6 rounded-lg shadow-md
                            text-center md:text-left'>
                                <div className='text-gray-500 mb-4'>{ job.type }</div>
                                <h1 className='text-3xl font-bold mb-4'>{ job.title }</h1>
                                <div className='text-gray-500 mb-4 flex items-center
                                justify-center md:justify-start'>
                                    <FaMapMarker className='text-orange-700 mr-1'/>
                                    <p className='text-orange-700'>{ job.location }</p>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
        </>
    );
};

const jobLoader = async ({ params }) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
}

export  { JobPage as default, jobLoader };