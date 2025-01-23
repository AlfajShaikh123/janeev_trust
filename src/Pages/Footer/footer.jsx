export function Footer() {
    return (<>

        <div className=" bg-gray-200 pb-3">
            <div className="mt-10 p-10 grid grid-flow-row grid-cols-2  md:flex justify-around gap-10  md:ps-20">
                <div className="flex flex-col space-y-2">
                    <img src="https://www.janeevtrust.org/mr/wp-content/uploads/2022/04/janeev-foundation-logo.png" alt="" className="h-32 w-32" />
                    <p className="leading-7 text-justify">जाणीव, मुळांची आणि मूल्यांची” समाजातील प्रत्येकाने आपले मूळ विसरु नये, आणि त्या मुळाशी असलेली बांधिलकीही आणि त्या मूळ विचारधारणेला वर्धिष्णू करताना जीवन मूल्येही विसरु नयेत!!!</p>
                </div>
                <div className="space-y-2">
                    <p className="font-bold">कार्यक्षेत्र</p>
                    <p>शैक्षणिक</p>
                    <p>कला</p>
                    <p>क्रीडा</p>
                    <p>सांस्कृतिक</p>
                    <p>सामाजिक</p>
                </div>

                <div className="space-y-2">
                    <p className="font-bold">मुख्य कार्यालय पत्ता</p>
                    <p>३/८७, मिठीबाई बिल्डिंग,

                        आचार्य दोंदे मार्ग, शिवडी, मुंबई

                        mtnksmumbai@gmail.com

                        +91-22-241636007</p>
                </div>

                
            </div>
            <hr className="h-1 bg-gray-300 ms-5 me-5" />
            <p className="ms-5 me-5 text-sm text-center font-bold mt-2" >© Janeev Trust 2022 All Rights Reserved.</p>
        </div>
    </>)
}