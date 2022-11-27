import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function light({ datajson }) {

    const router = useRouter()

    const [backdate, setbackdate] = useState()
    const [dataset, setdataset] = useState(datajson)

    const handlechange = (e) => {
        if (e.target.name == "date") {
            setbackdate(e.target.value)
        }
    }

    const handlesubmit = async (e) => {

        //     // e.preventdefault()
        //     // // const datatosend = { name, email, password }
        //     // const datatosend = { backdate }

        //     // let res = await fetch('http://localhost:3000/api/getlight', {
        //     //     method: 'POST',
        //     //     headers: {
        //     //         'Content-Type': 'application / json'
        //     //     },
        //     //     body: JSON.stringify(datatosend),
        //     // })

        //     // let response = await res.json()

        //     // if (response.error)
        //     //     console.log("Error")
        //     // else 
        //     //     setdataset(response)

        let url = `/light?backdate=${backdate}`
        window.location = url
    }

    if (!(dataset.length)) {
        return <p>loading ...</p>
    }

    return (
        <div className='flex flex-col min-h-screen'>
            <form className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500" onSubmit={handlesubmit} >
                <h1 className="text-2xl font-bold dark:text-gray-50">Enter the date you want data for ?</h1>

                <label htmlFor="fullname" className="text-gray-500 font-light mt-8 dark:text-gray-50 my-2">Back Date</label>
                <input type="text" name="date" onChange={handlechange} value={backdate} placeholder="enter in YYYY-MM-DD format ONLY !!" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />


                <div className="flex flex-row items-center justify-start">
                    <button className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
                        Submit
                        <svg width="24" height="24" viewBox="0 0 24 24" className="text-cyan-500 ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z" fill="currentColor" />
                        </svg>
                    </button>
                </div>
            </form>


            <div className="overflow-x-auto relative">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Created At
                            </th>
                            <th scope="col" className="py-3 px-6">
                                value
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(dataset).map((k) => {
                            return (
                                <tr key={k} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {dataset[k].createdAt}
                                    </th>
                                    <td className="py-4 px-6">
                                        {dataset[k].Light}
                                    </td>
                                </tr>
                            )
                        })}


                    </tbody>
                </table>
            </div>



        </div>
    )
}

export async function getServerSideProps(context) {
    if (context.query.backdate) {
        let data = await fetch(`http://localhost:3000/api/getlight?backdate=${context.query.backdate}`)
        let datajson = await data.json()
        return {
            props: { datajson }, // will be passed to the page component as props
        }
    }
    else {

        return {
            props: { datajson: [] }
        }
    }
}