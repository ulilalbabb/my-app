import { LiaShippingFastSolid, LiaMoneyBillAltSolid,  } from "react-icons/lia";
import { FiPhoneCall } from "react-icons/fi";
import { GoShieldLock } from "react-icons/go";

const InformationLayouts = () => {
    return (
        <div className="p-3 md:px-34 md:py-10 flex gap-4">
                <div className="bg-gray-200 w-[262px] h-[220px] flex flex-col justify-center pl-10 gap-3">
                    <LiaShippingFastSolid size={40}/>
                    <p>Free Shipping</p>
                    <p>On all orders over $100</p>
                </div>
                <div className="bg-gray-200 w-[262px] h-[220px] flex flex-col justify-center pl-10 gap-3">
                    <LiaMoneyBillAltSolid size={40}/>
                    <p>Money Back</p>
                    <p>30 days guarantee</p>
                </div>
                <div className="bg-gray-200 w-[262px] h-[220px] flex flex-col justify-center pl-10 gap-3">
                    <GoShieldLock size={40}/>
                    <p>Secure Payments</p>
                    <p>100% Protected</p>
                </div>
                <div className="bg-gray-200 w-[262px] h-[220px] flex flex-col justify-center pl-10 gap-3">
                    <FiPhoneCall size={40}/>
                    <p>24/7 Support</p>
                    <p>Phone and Email support</p>
                </div>
        </div>
    );
};

export default InformationLayouts;