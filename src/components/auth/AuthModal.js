import React from 'react';

const AuthModal = ({ details, setDetails, fromSubmit, name }) => {

    const inputChanged = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    };
    return (
        <>
            <div className="relative py-5">
                <p className="text-center">Please DONT change the email and password, this free api doesn't work with any other data 🙏</p>
                <div className="w-full max-w-xs flex justify-center m-auto">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={fromSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" name="email"
                                value={details.email}
                                onChange={inputChanged}
                                autoComplete="false"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="password" name="password"
                                value={details.password}
                                onChange={inputChanged}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                {name}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AuthModal;