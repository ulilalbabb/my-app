import { LiaShippingFastSolid, LiaMoneyBillAltSolid,  } from "react-icons/lia";
import { FiPhoneCall } from "react-icons/fi";
import { GoShieldLock } from "react-icons/go";

const InformationLayouts = () => {
    return (
        <div className="px-3 py-8 md:px-34 md:py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-200 w-[170px] h-[198px] md:w-[262px] md:h-[220px] flex flex-col justify-between py-8 pl-3 md:py-13 md:pl-7">
                    <LiaShippingFastSolid size={40}/>
                    <h2 className="font-semibold text-sm">Free Shipping</h2>
                    <p className="flex flex-col md:flex-row md:gap-1">
                        <span>All orders</span>
                        <span>above $100</span>
                    </p>
                </div>
                <div className="bg-gray-200 w-[170px] h-[198px] md:w-[262px] md:h-[220px] flex flex-col justify-between py-8 pl-3 md:py-13 md:pl-7">
                    <LiaMoneyBillAltSolid size={40}/>
                    <h2 className="font-semibold text-sm">Money Back</h2>
                    <p className="flex flex-col md:flex-row md:gap-1">
                        <span>30 days</span>
                        <span>free return</span>
                    </p>
                </div>
                <div className="bg-gray-200 w-[170px] h-[198px] md:w-[262px] md:h-[220px] flex flex-col justify-between py-8 pl-3 md:py-13 md:pl-7">
                    <GoShieldLock size={40}/>
                    <h2 className="font-semibold text-sm">Secure Payments</h2>
                    <p className="flex flex-col md:flex-row md:gap-1">
                        <span>Secured</span>
                        <span>Payment</span>
                    </p>
                </div>
                <div className="bg-gray-200 w-[170px] h-[198px] md:w-[262px] md:h-[220px] flex flex-col justify-between py-8 pl-3 md:py-13 md:pl-7">
                    <FiPhoneCall size={40}/>
                    <h2 className="font-semibold text-sm">24/7 Support</h2>
                    <p className="flex flex-col md:flex-row md:gap-1">
                        <span>Phone and</span>
                        <span>Email Support</span>
                    </p>
                </div>
        </div>
    );
};

export default InformationLayouts;