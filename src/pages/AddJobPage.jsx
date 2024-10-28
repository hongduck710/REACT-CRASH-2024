import { useState } from "react";

const AddJobPage = () => {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [salary, setSalary] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhone, setContactPhone] = useState('');

    return (
        <section className="bg-indigo-50">
            <div className="container m-auto max-w-2xl py-24">
                <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md
                border m-4 md:m-0">
                    <form>
                        <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>
                        <div className="mb-4">
                            <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
                                Job Type
                            </label>
                            <select 
                                id="type"
                                name="type"
                                className="border rounded w-full py-2 px-3"
                                required
                                value={type}
                            >
                                <option value='Full-Time'>Full-Time</option>
                                <option value='Part-Time'>Part-Time</option>
                                <option value="Remote">Remote</option>
                                <option value="Internship">Internship</option>        
                            </select>

                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default AddJobPage;