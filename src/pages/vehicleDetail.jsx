import { useState } from "react";
import aig from "../assets/AIG.png"
import allianz from "../assets/Allianz.png"
import zurich from "../assets/Zurich.png"
import { PropTypes } from 'prop-types';
import { useEffect } from "react";

const Card = ({name,alldriver,windscreen,stampduty,addon,sst,bncd}) => {
    return (
        <div className="border-2 border-[#fda500] w-full">
            <div className="border-b-2 h-44 relative p-6 flex items-center justify-center w-full border-b-[#fda500]">
                <h4 style={{fontWeight:"bold",fontSize:"35px"}}>{name}</h4>
                <span className="-bottom-3  left-5 absolute w-64 h-5 bg-[#fda500] p-3 py-4 flex items-center text-white">{name}</span>
            </div>
            <div className="py-10 px-6 flex flex-col gap-6">

                <div className="flex flex-col items-center justify-between w-full gap-2">
                    <div className="flex items-center justify-between w-full">
                        <span className="font-bold ">Premium</span>
                        <span className="">RM {bncd}</span>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <span className="font-bold ">NCD 55.00%</span>
                        <span className="">-(RM 55.00)</span>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between w-full gap-2">
                    <h1 className="text-xl font-normal text-gray-500 text-start w-full">Drivers Coverage</h1>
                    <div className="flex items-center justify-between w-full">
                        <div className="flex flex-col items-start">
                            <span className="font-bold flex gap-2">3 Additional Drivers <span className="text-indigo-600">[DRIVERS]</span>
                            </span>
                            <input type="radio" name="coverage" />
                        </div>
                        <span className="font-bold uppercase">Free</span>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <span className="font-bold flex gap-2">All Drivers
                            <input type="radio" name="coverage" />
                        </span>

                        <span className="text-gray-300">RM <br /> {alldriver}</span>
                    </div>
                </div>


                <div className="flex flex-col items-center justify-between w-full gap-2">
                    <h1 className="text-xl font-normal text-gray-500 text-start w-full">Additional Options</h1>
                    <div className="flex items-center justify-between w-full">
                        <span className="font-bold flex gap-2">Windscreen
                            <input type="checkbox" name="coverage" />
                        </span>
                        <span className="text-gray-300">BM: {windscreen}</span>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <span className="font-bold flex gap-2">Add-on
                            <input type="checkbox" name="coverage" />
                        </span>

                        <span className="text-gray-300">RM {addon}</span>
                    </div>
                </div>


                <div className="flex flex-col items-center justify-between w-full gap-2">
                    <div className="flex items-center justify-between w-full">
                        <span className="font-bold ">SST</span>
                        <span className="">RM {sst}</span>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <span className="font-bold ">Stamp Duty</span>
                        <span className="">RM {stampduty}</span>
                    </div>
                    <hr className="w-full h-[1px] my-2  bg-slate-300" />

                    <div className="flex items-center justify-between w-full">
                        <span className="font-bold ">Total Payable</span>
                        <span className="">RM 57.70</span>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button className=" bg-[#0790b2] text-white py-4 px-8 uppercase font-bold">Purchase Policy</button>
                </div>
            </div>

        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string

}

const VehicleDetail = () => {
    const [data,setData]=useState([]);
    const [details,setDetails]=useState([]);
    const [insurer,setInsurer]=useState([]);
    let insurername="";

    useEffect(()=>{
        const urlParams = new URLSearchParams(window.location.search);
        const id= urlParams.get("quotationid");
        const url = 'https://first-verbena-galette.glitch.me/getQuotations'; 
        const secondurl = 'https://first-verbena-galette.glitch.me/getdetails'; 

        fetch(url)
        .then(response => {
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            let mydata=data.data.filter((item)=>item.Id==id);
            insurername=mydata[0].insurer;
            setData(data.data.filter((item)=>item.Id==id));
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
        fetch(secondurl)
        .then(response => {
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            setDetails(data.data.filter((item)=>item.quotationId==id));
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
        const getInsurerurl = 'https://first-verbena-galette.glitch.me/getinsurer'; 
        fetch(getInsurerurl)
        .then(response => {
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(datas => {
            if(insurername.includes(',')){
                const commaIndex =  insurername.indexOf(',');
                const beforeComma = insurername.substring(0, commaIndex);
                const afterComma =  insurername.substring(commaIndex + 1);
                setInsurer(datas.data.filter((item)=>item.name==beforeComma || item.name==afterComma));
            }
            else{
                setInsurer(datas.data.filter((item)=>item.name==insurername));
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    },[]);


    const cards = [
        {
            title: "AIG",
            img: aig
        },
        {
            title:"ALLIANZ",
            img:allianz
        },
        {
            title:"ZURICH",
            img:zurich
        }
    ]

    return (
        <section className="mt-20 pt-4 w-full bg-slate-50">
            <div className="flex flex-col md:flex-row md:items-center px-4 w-full justify-center">
                <div className="flex flex-col p-4">
                    <h1 className="text-gray-400 flex items-center gap-3">Quotations <span className="w-8 h-[2px] bg-[#0790b2] rounded-lg"></span> </h1>
                    <h1 className="text-2xl font-normal">Review Quotations</h1>
                </div>
                <div className="flex flex-1 items-start p-4">
                    <p className="text-gray-600 ">Please select your preferred quotation from below and click on the “Purchase Policy” button to purchase the selected policy.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
                    <div className="flex flex-col items-start gap-8">
                        <div className="flex flex-col gap-2 w-full">
                            <h1 className="text-2xl flex items-center gap-3">Vehicle Details</h1>
                            <span className="w-16 h-[3px] bg-[#0790b2] rounded-lg"></span>
                        </div>
                        <div className="grid grid-cols-2 w-full">
                            <span className="font-bold border p-4">Registration Number</span>
                            {data.map((item,index)=>(
                                <span className="uppercase border p-4">{item.regNo}</span>
                                ))}
                            <span className="font-bold border p-4">Cover Period</span>
                            {details.map((item,index)=>(
                                <span className="border p-4">{new Date(item.coverageStart).toLocaleString()+' - '+new Date(item.coverageEnd).toLocaleString()}</span>
                            ))}
                        </div>
                    </div>

                {data.map((item,index)=>(
                    <div className="flex flex-col items-start gap-8 w-full">
                        <div className="flex flex-col gap-2 w-full">
                            <h1 className="text-2xl flex items-center gap-3">Vehicle Owner Details</h1>
                            <span className="w-16 h-[3px] bg-[#0790b2] rounded-lg"></span>
                        </div>
                        <div className="grid grid-cols-2 w-full">
                            <span className="font-bold border p-4">Name</span>
                            <span className="uppercase border p-4">{item.insurer}</span>
                            <span className="font-bold border p-4">NRIC/Passport No</span>
                            <span className="border p-4">{item.nric}</span>
                        </div>
                    </div>
                ))}

                <div className="flex flex-col items-start gap-8 w-full">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl flex items-center gap-3">Mailing Address</h1>
                        <span className="w-16 h-[3px] bg-[#0790b2] rounded-lg"></span>
                    </div>
                    <div className="grid grid-cols-2 w-full h-full">
                        <textarea className="p-2 outline outline-2" placeholder="Full Address" cols="40" rows="2"></textarea>
                        <span className="border p-4">
                            <span className="outline outline-2 p-4">Postcode</span>
                        </span>
                    </div>
                </div>


                <div className="flex flex-col items-start gap-8 w-full">
                    <div className="flex flex-col gap-2 w-full">
                        <h1 className="text-2xl flex items-center gap-3">Vehicle Road Tax</h1>
                        <span className="w-16 h-[3px] bg-[#0790b2] rounded-lg"></span>
                    </div>
                        {details.map((item,index)=>(
                            <div className="grid grid-cols-2 w-full">
                                <span className="font-bold border p-4">6 Months</span>
                                <span className="uppercase border p-4">RM {item.sixmonths}</span>
                                <span className="font-bold border p-4">12 Months</span>
                                <span className="border p-4">RM {item.twlevemonths}</span>
                            </div>
                        ))}
                </div>


            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full p-8">
                {
                    insurer.map((item,index) =>
                        <Card key={index} {...item} />
                    )
                }
            </div>
        </section>
    )
}


export default VehicleDetail