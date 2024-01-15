import { useState } from "react";
import { MDBCheckbox } from 'mdb-react-ui-kit';
import { PropTypes } from 'prop-types';
import { useEffect } from "react";

const Card = ({name,alldriver,windscreen,stampduty,addon,sst,bncd,checked,six,twelve }) => {
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

                    <div className="items-center justify-between w-full">
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                            <span className="font-bold ">Total Insurance Premium</span>
                            <span className="">RM {checked=="sixMonths"?alldriver+sst+windscreen+addon+sst+bncd+six:checked=="twelveMonths"?alldriver+sst+windscreen+addon+sst+bncd+twelve:alldriver+sst+windscreen+addon+sst+bncd}</span>
                        </div>
                        {checked=="sixMonths"?(
                            <div style={{display:"flex",justifyContent:"space-between"}}>
                                <span className="font-bold ">Road Tax</span>
                                <span className="">RM {six}</span>
                            </div>
                        ):checked=="twelveMonths"?(
                            <div style={{display:"flex",justifyContent:"space-between"}}>
                                <span className="font-bold ">Road Tax</span>
                                <span className="">RM {twelve}</span>
                            </div>
                        ):""}
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
    name: PropTypes.string,
    alldriver: PropTypes.string,
    windscreen: PropTypes.string,
    stampduty: PropTypes.string,
    addon: PropTypes.string,
    sst: PropTypes.string,
    bncd: PropTypes.string
}

const VehicleDetail = () => {
    const [data,setData]=useState([]);
    const [details,setDetails]=useState([]);
    const [quotation,setQuotation]=useState([]);
    const [insurer,setInsurer]=useState([]);
    const [six,setSix]=useState();
    const [twelve,setTwelve]=useState();
    const [checkedOption, setCheckedOption] = useState(null);

    const handleCheckboxChange = (option) => {
        setCheckedOption(option === checkedOption ? null : option);
    };

    useEffect(()=>{
        const urlParams = new URLSearchParams(window.location.search);
        const id= urlParams.get("quotationid");
        const url = 'https://luxuriant-aquamarine-fabrosaurus.glitch.me/getQuotations'; 
        const secondurl = `https://luxuriant-aquamarine-fabrosaurus.glitch.me/getDetailsComp?id=${id}`; 

        fetch(url)
        .then(response => {
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data.data.filter((item)=>item.Id==id));
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
        const getInsurerurl = `https://luxuriant-aquamarine-fabrosaurus.glitch.me/getDetailsComp?id=${id}`; 
        fetch(getInsurerurl)
        .then(response => {
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(datas => {
            setQuotation(datas.data);
            setSix(datas.data[0].sixmonths);
            setTwelve(datas.data[0].twlevemonths);
            setInsurer(datas.datas);
            // if(insurername?.includes(',')){
            //     const commaIndex =  insurername.indexOf(',');
            //     const beforeComma = insurername.substring(0, commaIndex);
            //     const afterComma =  insurername.substring(commaIndex + 1);
            //     setInsurer(datas.data.filter((item)=>item.name==beforeComma || item.name==afterComma));
            // }
            // else{
            //     setInsurer(datas.data.filter((item)=>item.name==insurername));
            // }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    },[]);

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
                                <span key={index} className="uppercase border p-4">{item.regNo}</span>
                                ))}
                            <span className="font-bold border p-4">Cover Period</span>
                            {details.map((item,index)=>(
                                <span key={index}  className="border p-4">{new Date(item.coverageStart).toLocaleString()+' - '+new Date(item.coverageEnd).toLocaleString()}</span>
                            ))}
                        </div>
                    </div>

                {data.map((item,index)=>(
                    <div key={index} className="flex flex-col items-start gap-8 w-full">
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
                            <div key={index}  className="grid grid-cols-2 w-full">
                                 <span className="font-bold border p-4">
                                    <MDBCheckbox
                                    id='controlledCheckbox1'
                                    label="6 Months"
                                    checked={checkedOption === 'sixMonths'}
                                    onChange={() => handleCheckboxChange('sixMonths')}
                                    />
                                </span>
                                <span className="uppercase border p-4">RM {item.sixmonths}</span>
                                <span className="font-bold border p-4">
                                    <MDBCheckbox
                                    id='controlledCheckbox2'
                                    label="12 Months"
                                    style={{ marginLeft: "3px" }}
                                    checked={checkedOption === 'twelveMonths'}
                                    onChange={() => handleCheckboxChange('twelveMonths')}
                                    />
                                </span>
                                <span className="border p-4">RM {item.twlevemonths}</span>
                            </div>
                        ))}
                </div>


            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full p-8">
                {
                    insurer.map((item,index) =>
                        <Card key={index} {...item} checked={checkedOption} six={six} twelve={twelve}/>
                    )
                }
            </div>
        </section>
    )
}

VehicleDetail.propTypes= {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    amount: PropTypes.string
}
export default VehicleDetail