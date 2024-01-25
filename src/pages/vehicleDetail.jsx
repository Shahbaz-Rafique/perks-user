import { useState } from "react";
import { MDBCheckbox,MDBSpinner } from 'mdb-react-ui-kit';
import { PropTypes } from 'prop-types';
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({Id,name,ncd,alldriver,windscreen,stampduty,addon,sst,bncd,ancd,checked,six,twelve }) => {
    const [driverCoverageChecked, setDriverCoverageChecked] = useState(false);
    const [allDriversChecked, setAllDriversChecked] = useState(true);
    const [addonChecked, setAddonChecked] = useState(false);
    const [windscreenChecked, setWindscreenChecked] = useState(false);

    const [driver1Name,setDriver1Name]=useState("");
    const [driver2Name,setDriver2Name]=useState("");
    const [driver3Name,setDriver3Name]=useState("");

    const [driver1Nric,setDriver1Nric]=useState("");
    const [driver2Nric,setDriver2Nric]=useState("");
    const [driver3Nric,setDriver3Nric]=useState("");

    const [submit,setSubmit]=useState(false);
  
    const handleDriverCoverageChange = () => {
      setDriverCoverageChecked(!driverCoverageChecked);
      setAllDriversChecked(false);
    };
  
    const handleAllDriversChange = () => {
      setAllDriversChecked(!allDriversChecked);
      setDriverCoverageChecked(false);
    };
  
    const handleAddonChange = () => {
      setAddonChecked(!addonChecked);
    };
  
    const handleWindscreenChange = () => {
      setWindscreenChecked(!windscreenChecked);
    };

    const total=()=>{
        let sum=(bncd-((bncd)*((ncd)/100)))+sst+stampduty;
        if(allDriversChecked){
            sum+=alldriver;
        }
        if(addonChecked){
            sum+=addon;
        }
        if(windscreenChecked){
            sum+=windscreen;
        }
        return sum.toFixed(2);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        setSubmit(true);
        console.log(Id);

        const url = 'https://wistful-bubble-meter.glitch.me/addDrivers';

        const data = {
            driver1Name: driver1Name,
            driver1Nric: driver1Nric,
            driver2Name: driver2Name,
            driver2Nric: driver2Nric,
            driver3Name: driver3Name,
            driver3Nric: driver3Nric,
            id:Id,
        };

        const requestBody = JSON.stringify(data);
        const headers = {
        'Content-Type': 'application/json',
        };

        fetch(url, {
            method: 'POST',
            headers: headers,
            body: requestBody,
        })
        .then(response => response.json())
        .then(data => {
            setSubmit(false);
            if(data.message=="added"){
                showToast();
            }
        })
        .catch(error => {
            setSubmit(false);
            console.error('Error:', error);
        });
    }

    const showToast = () => {
        toast.success('Driver added sucessfully', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      };
    
    function formatNumberWithCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    
    return (
        <div className="border-2 border-[#fda500] w-full">
            <ToastContainer />
            <div className="border-b-2 h-44 relative p-6 flex items-center justify-center w-full border-b-[#fda500]">
                <h4 style={{fontWeight:"bold",fontSize:"35px"}}>{name}</h4>
                <span className="-bottom-3  left-5 absolute w-64 h-5 bg-[#fda500] p-3 py-4 flex items-center text-white">{name}</span>
            </div>
            <div className="py-10 px-6 flex flex-col gap-6">

                <div className="flex flex-col items-center justify-between w-full gap-2">
                    <div className="flex items-center justify-between w-full">
                        <span className="font-bold ">Premium</span>
                        <span className="">RM {formatNumberWithCommas(bncd)}.00</span>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <span className="font-bold ">NCD {ncd}%</span>
                        <span className="">-(RM {formatNumberWithCommas((bncd)*((ncd)/100))}.00)</span>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between w-full gap-2">
                    <h1 className="text-xl font-normal text-gray-500 text-start w-full">Drivers Coverage</h1>
                    <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col items-start">
                        <span className={`font-bold flex gap-2 ${driverCoverageChecked ? 'text-black' : 'text-gray-500'}`}>
                        3 Additional Drivers
                        <span className="text-indigo-600">[DRIVERS]</span>
                        </span>
                        <input type="checkbox" name="coverage" checked={driverCoverageChecked} onChange={handleDriverCoverageChange} />
                    </div>
                    <span className={`font-bold uppercase ${driverCoverageChecked ? 'text-black' : 'text-gray-500'}`}>Free</span>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        {
                            driverCoverageChecked?(
                                <div className="custom-table-container">
                                    <form onSubmit={handleSubmit}>
                                        <table>
                                            <tbody>
                                                <tr key="1">
                                                    <td style={{fontSize:"12px"}}>Driver 1</td>
                                                    <td><input type="text" id="fullname" placeholder="Full Name" style={{border:"1px solid black",width:"130px"}} value={driver1Name} onChange={(e)=>{setDriver1Name(e.target.value)}} required/></td>
                                                    <td><input type="text" id="nric" placeholder="NRIC/Passport No" style={{border:"1px solid black",width:"130px"}} value={driver1Nric} onChange={(e)=>{setDriver1Nric(e.target.value)}} required/></td>
                                                </tr>
                                                <tr key="1">
                                                    <td style={{fontSize:"12px"}}>Driver 2</td>
                                                    <td><input type="text" id="fullname" placeholder="Full Name" style={{border:"1px solid black",width:"130px"}} value={driver2Name} onChange={(e)=>{setDriver2Name(e.target.value)}} required/></td>
                                                    <td><input type="text" id="nric" placeholder="NRIC/Passport No" style={{border:"1px solid black",width:"130px"}} value={driver2Nric} onChange={(e)=>{setDriver2Nric(e.target.value)}} required/></td>
                                                </tr>
                                                <tr key="1">
                                                    <td style={{fontSize:"12px"}}>Driver 3</td>
                                                    <td><input type="text" id="fullname" placeholder="Full Name" style={{border:"1px solid black",width:"130px"}} value={driver3Name} onChange={(e)=>{setDriver3Name(e.target.value)}} required/></td>
                                                    <td><input type="text" id="nric" placeholder="NRIC/Passport No" style={{border:"1px solid black",width:"130px"}} value={driver3Nric} onChange={(e)=>{setDriver3Nric(e.target.value)}} required/></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        {
                                            !submit?(
                                                <button type="submit" style={{backgroundColor:"#ec6707",color:"white",padding:"10px",marginTop:"5px",width:"100px",borderRadius:"5px",cursor:"pointer"}}>Submit</button>
                                            ):(
                                                <button type="submit" style={{backgroundColor:"#ec6707",color:"white",padding:"10px",marginTop:"5px",width:"100px",borderRadius:"5px",cursor:"pointer"}}>Submitting..</button>
                                            )
                                        }
                                    </form>
                                </div>
                            ):(
                                ""
                            )
                        }
                    </div>
                    <div className="flex items-center justify-between w-full">
                    <span className={`font-bold flex gap-2 ${allDriversChecked ? 'text-black' : 'text-gray-500'}`}>
                        All Drivers
                        <input
                        type="checkbox"
                        name="coverage"
                        checked={allDriversChecked}
                        onChange={handleAllDriversChange}
                        />
                    </span>
                    <span className={`${allDriversChecked ? 'text-black font-bold' : 'text-gray-300'}`}>RM {formatNumberWithCommas(alldriver)}.00</span>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between w-full gap-2">
                    <h1 className="text-xl font-normal text-gray-500 text-start w-full">Additional Options</h1>
                    <div className="flex items-center justify-between w-full">
                    <span className={`font-bold flex gap-2 ${windscreenChecked ? 'text-black' : 'text-gray-500'}`}>
                        Windscreen
                        <input type="checkbox" name="coverage" checked={windscreenChecked} onChange={handleWindscreenChange} />
                    </span>
                    <span className={` ${windscreenChecked ? 'font-bold' : 'text-gray-300'}`}>BM {formatNumberWithCommas(windscreen)}.00</span>
                    </div>
                    <div className="flex items-center justify-between w-full">
                    <span className={`font-bold flex gap-2 ${addonChecked ? 'text-black' : 'text-gray-500'}`}>
                        Add-on
                        <input type="checkbox" name="coverage" checked={addonChecked} onChange={handleAddonChange} />
                    </span>
                    <span className={`${addonChecked ? 'font-bold' : 'text-gray-300'}`}>RM {formatNumberWithCommas(addon)}.00</span>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between w-full gap-2">
                    <div className="flex items-center justify-between w-full">
                        <span className="font-bold ">SST</span>
                        <span className="">RM {formatNumberWithCommas(sst)}.00</span>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <span className="font-bold ">Stamp Duty</span>
                        <span className="">RM {formatNumberWithCommas(stampduty)}.00</span>
                    </div>
                    <hr className="w-full h-[1px] my-2  bg-slate-300" />

                    <div className="items-center justify-between w-full">
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                            <span className="font-bold ">Total Insurance Premium</span>
                            <span className="">RM {formatNumberWithCommas(total())}</span>
                        </div>
                        {checked=="sixMonths"?(
                            <div style={{display:"flex",justifyContent:"space-between"}}>
                                <span className="font-bold ">Road Tax</span>
                                <span className="">RM {formatNumberWithCommas(six)}.00</span>
                            </div>
                        ):checked=="twelveMonths"?(
                            <div style={{display:"flex",justifyContent:"space-between"}}>
                                <span className="font-bold ">Road Tax</span>
                                <span className="">RM {formatNumberWithCommas(twelve)}.00</span>
                            </div>
                        ):""}
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                            <span className="font-bold ">Total Payable</span>
                            <span className="">RM {checked=="sixMonths"?`${formatNumberWithCommas(parseInt(total())+parseInt(six))}.00`:checked=="twelveMonths"?`${formatNumberWithCommas(parseInt(total())+parseInt(twelve))}.00`:formatNumberWithCommas(total())}</span>
                        </div>
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
    bncd: PropTypes.string,
    ancd:PropTypes.string,
}

const VehicleDetail = () => {
    const [data,setData]=useState([]);
    const [details,setDetails]=useState([]);
    const [quotation,setQuotation]=useState([]);
    const [insurer,setInsurer]=useState([]);
    const [six,setSix]=useState();
    const [twelve,setTwelve]=useState();
    const [ncd,setNcd]=useState();
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
            setNcd(data.data.filter((item)=>item.quotationId==id)[0].ncd);
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
                            <span className="uppercase border p-4">{item.name}</span>
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
                            {data.map((item,index)=>(
                                <span className="outline outline-2 p-4">PostCode: {item.postCode}</span>
                            ))}
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
                        <Card key={index} {...item} checked={checkedOption} six={six} twelve={twelve} ncd={ncd}/>
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