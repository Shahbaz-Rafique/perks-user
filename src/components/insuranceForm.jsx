import BtnGetQuote from "./btnGetQuote";
import React, { useEffect, useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';

const InsuranceForm = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [submit,setSubmit]=useState(false);
    const [options,setOptions]=useState([]);

    useEffect(()=>{
        const url = 'https://first-verbena-galette.glitch.me/getinsurer'; 
        fetch(url)
        .then(response => {
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            setOptions(data.data.map(({ name }) => ({ value: name, label: name })));
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    },[])

    const handleSelectChange = (selected) => {
        if (selected.length <= 2) {
            setSelectedOptions(selected);
        }
    };

    const showToast = () => {
        toast.success('Your Quotation application has been submitted', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          onClose: () => {
            window.location.href="/";
          },
        });
      };

    const handleSubmit=(event)=>{
        event.preventDefault();
        setSubmit(true);
        const regno=document.getElementById("regno").value;
        const postcode=document.getElementById("postcode").value;
        const name=document.getElementById("name").value;
        const email=document.getElementById("email").value;
        const nric=document.getElementById("nric").value;
        const mobile=document.getElementById("mobile").value;

        const url = 'https://first-verbena-galette.glitch.me/quotation';

        const data = {
            regNo: regno,
            postCode: postcode,
            name: name,
            email: email,
            nric: nric,
            phone: mobile,
            insurer: selectedOptions,
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

    return (
        <div className="w-full h-full md:p-16 p-4 bg-[#8F3F04] flex flex-col justify-start items-center gap-8">
            <ToastContainer />
            <div className="self-stretch h-98 flex flex-col justify-start items-center gap-6">
                <div className="px-2  bg-white rounded-full border-[#28AA73] border flex justify-center items-center ">
                    <div className="text-[#28AA73]  ">Join Today</div>
                </div>
                <div className="flex flex-col justify-center items-center gap-6">
                    <div className="self-stretch text-center text-white text-5xl ">Secure Your Ride Today</div>
                    <div className="flex-1 text-center text-white text-xs">Join Our Exclusive Insurance Program for Tailored Coverage</div>
                </div>
            </div>

            <div className="flex flex-col justify-start items-start gap-8 md:max-w-2xl">
            <form onSubmit={handleSubmit}>
                <div className="self-stretch  flex flex-col justify-start items-start gap-3">
                    <div className="text-white text-lg">Vehicle Details</div>
                    <div className="flex flex-col md:flex-row self-stretch justify-start items-center gap-8 ">
                        <div className="flex-1 w-full flex flex-col justify-start items-start gap-2">
                            <div className="self-stretch text-white text-xs">Vehicle Registration Number</div>
                            <div className="self-stretch p-2  bg-[#F9FAFB] rounded-lg border-[#D1D5DB] border-1 flex justify-start items-center gap-10 ">
                                <div className="flex-1 flex justify-start items-center ">
                                    <input type="text" id="regno" placeholder="Reg No" className="border-0 outline-none"  />
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 w-full flex flex-col justify-start items-start gap-2">
                            <div className="self-stretch text-white text-xs">Postcode</div>
                            <div className="self-stretch p-2  bg-[#F9FAFB] rounded-lg border-[#D1D5DB] border-1 flex justify-start items-center gap-10 ">
                                <div className="flex-1 flex justify-start items-center ">
                                    <input type="text" id="postcode" placeholder="Post Code" className="border-0 outline-none"  />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch h-309 flex flex-col justify-start items-start gap-3">
                    <div className="text-white text-lg">Vehicle Owner Details</div>
                    <div className="flex flex-col md:flex-row  self-stretch justify-start items-center gap-8 ">
                        <div className="flex-1 w-full flex flex-col justify-start items-start gap-2">
                            <div className="self-stretch text-white text-xs">Name</div>
                            <div className="self-stretch p-2  bg-[#F9FAFB] rounded-lg border-[#D1D5DB] border-1 flex justify-start items-center gap-10 ">
                                <div className="flex-1 flex justify-start items-center ">
                                    <input type="text" id="name" placeholder="Name" className="border-0 outline-none"  />
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 w-full flex flex-col justify-start items-start gap-2">
                            <div className="self-stretch text-white text-xs">NRIC (Malaysian)/Passport Number (non-Malaysian)</div>
                            <div className="self-stretch p-2  bg-[#F9FAFB] rounded-lg border-[#D1D5DB] border-1 flex justify-start items-center gap-10 ">
                                <div className="flex-1 flex justify-start items-center ">
                                    <input type="text" id="nric" placeholder="NRIC" className="border-0 outline-none"  />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row  self-stretch justify-start items-center gap-8 ">
                        <div className="flex-1 w-full flex flex-col justify-start items-start gap-2">
                            <div className="self-stretch text-white text-xs">Email</div>
                            <div className="self-stretch p-2  bg-[#F9FAFB] rounded-lg border-[#D1D5DB] border-1 flex justify-start items-center gap-10 ">
                                <div className="flex-1 flex justify-start items-center ">
                                    <input type="email" id="email" placeholder="Email" className="border-0 outline-none"  />
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 w-full flex flex-col justify-start items-start gap-2">
                            <div className="self-stretch text-white text-xs">Mobile Number</div>
                            <div className="self-stretch p-2  bg-[#F9FAFB] rounded-lg border-[#D1D5DB] border-1 flex justify-start items-center gap-10 ">
                                <div className="flex-1 flex justify-start items-center ">
                                    <input type="text" id="mobile" placeholder="Phone" className="border-0 outline-none"  />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch justify-start items-start ">
                        <div className="flex-1 w-full flex flex-col justify-start items-start gap-2">
                            <div className="self-stretch text-white text-xs">Preferred Insurer/takaful Provider [select maximum of 2]</div>
                            <Select
                                isMulti
                                options={options}
                                value={selectedOptions}
                                onChange={handleSelectChange}
                                className="border-0 outline-none"
                                styles={{ 
                                    control: (provided) => ({
                                    ...provided,
                                    width: '320px',
                                    }),
                                }}
                                />
                        </div>
                    </div>
                </div>
                <div className=" flex justify-start items-start gap-4 ">
                    <input type="checkbox" className="w-6 h-6 bg-[#F9FAFB]" required/>
                    <div className="flex flex-col justify-start items-start gap-2 ">
                        <div>
                            <span className="text-white  ">By submitting this form, you confirm that you have read and agree to </span>
                            <span className="text-[#28AA73]  underline ">Perks Terms & Conditions</span>
                            <span className="text-white "> and </span>
                            <span className="text-[#28AA73] underline ">Privacy Statement</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-start">
                <button
                    type="submit"
                    className={` px-4 py-2 text-sm w-fit flex gap-2 text-slate-50 items-center whitespace-nowrap bg-green-500 rounded-full font-medium self-center`}
                    >
                    Get a Quote <FaArrowRightLong size={18} />
                </button>
               </div>
            </form>
            </div>
        </div>
    );
};

export default InsuranceForm;
