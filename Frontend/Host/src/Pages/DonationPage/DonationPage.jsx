import React, { useState, useEffect } from "react";
import TitleBanner from "../../components/TitleBanner";
import CauseTitleBg from "../../assets/cause-title-bg.jpg";

const DonationPage = () => {
  const [bankAccounts, setBankAccounts] = useState([]);

  useEffect(() => {
    const fetchBankAccounts = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/bank-accounts/"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch bank accounts");
        }
        const data = await response.json();
        setBankAccounts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBankAccounts();
  }, []);

  return (
    <div className="font-PlayfairDisplay bg-[#F3F5F7]">
      <TitleBanner title="Donate" backgroundImage={CauseTitleBg} />
      <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
        <div className="flex-grow flex justify-center items-center">
          <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6 text-center">
            <h1 className="text-3xl font-bold font-PlayfairDisplay text-blue-900 mb-5">
              DONATE & MAKE A <span className="text-[#cc1631]">DIFFERENCE</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 text-center max-w-xl mx-auto font-Montserrat">
              Your contribution helps us drive impactful change. Below are our
              bank details for donations.
            </p>
            <h2 className="text-3xl font-bold text-blue-900 font-PlayfairDisplay mb-5">
              BANK ACCOUNT <span className="text-[#cc1631]">DETAILS</span>
            </h2>
            <ul className="space-y-4">
              {bankAccounts.map((account, index) => (
                <li
                  key={index}
                  className="p-4 border border-gray-200 rounded-lg hover:shadow-md hover:border-[#cc1631] transition"
                >
                  <p className="text-lg text-blue-900 font-medium text-gray-800 font-Montserrat">
                    {account.bank_name}
                  </p>
                  <p className="text-gray-600 font-Montserrat">
                    <span className="font-semibold font-Montserrat">
                      Account Number:
                    </span>{" "}
                    {account.account_number}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
