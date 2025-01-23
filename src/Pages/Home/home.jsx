import { Carousel } from "@material-tailwind/react";


export function Home() {
    return (<>

        <div className="p-0">
            <Carousel transition={{ duration: 1 }} className="-z-10">
                <img
                    src="https://www.janeevtrust.org/mr/wp-content/uploads/2022/04/mainbanner3.jpg"
                    alt="image 1"
                    className=" h-full w-full object-cover "
                />
                <img
                    src="https://www.janeevtrust.org/mr/wp-content/uploads/2022/04/mainbanner1.jpg"
                    alt="image 2"
                    className=" h-full w-full object-cover"
                />
                <img
                    src="https://www.janeevtrust.org/mr/wp-content/uploads/2022/04/mainbanner2.jpg"
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
            </Carousel>

            <div>

            </div>

            <div className="mt-10 ">
                <h1 className="text-center font-semibold text-3xl md:p-1 p-1">जाणीव, मुळांची आणि मूल्यांची</h1>
                <p className="text-center mt-4 md:ps-20 md:pe-20 p-2 leading-8">महानगर टेलिफोन निगम कामगार संघाच्या मार्फत अनेक प्रकारचे उपक्रम गत अनेक दशके राबविले जातात, परंतु याच उपक्रमांना अधिक मुर्त स्वरुप द्यावे म्हणून संघटनेच्या माध्यमातून जी थोडी पुंजी यूनियन कडे जमा झाली होती. त्या पुंजीच्या आधारे अरविंद सावंत यांच्या अध्यक्षतेखाली एक ट्र्स्ट स्थापन केला. त्याचे नाव  जाणीव! </p>
            </div>

            <div className="mt-7">
                <h1 className="text-center text-orange-900 font-semibold text-3xl">कार्यक्षेत्रे</h1>
            </div>

            <div className="grid grid-flow-row md:grid-cols-3 grid-cols-2 gap-7 p-5 md:w-[75%] m-auto">
                <div className="flex flex-col items-center justify-center  border-black p-3 bg-green-200 shadow-xl transition-transform duration-100 ease-in-out hover:scale-105 hover:cursor-pointer rounded-2xl">
                    <img src="https://cdn-icons-png.flaticon.com/512/2936/2936719.png" className="md:h-40 h-30" alt="" />
                    <p className="font-bold ">शैक्षणिक</p>
                </div>
                <div className="flex flex-col items-center  justify-center border-black bg-yellow-200 p-3 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer rounded-2xl">
                    <img src="https://cdn-icons-png.freepik.com/512/5778/5778277.png" className="md:h-40 h-30" alt="" />
                    <p className="font-bold ">कला</p>
                </div>
                <div className="flex flex-col items-center justify-center  border-black bg-red-200 p-3 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer rounded-2xl ">
                    <img src="https://cdn-icons-png.flaticon.com/512/7438/7438654.png" className="md:h-40 h-30" alt="" />
                    <p className="font-bold mt-2">क्रीडा</p>
                </div>
                <div className="flex flex-col items-center justify-center  bg-orange-200 p-3 border-black shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer rounded-2xl">
                    <img src="https://cdn-icons-png.flaticon.com/512/11314/11314900.png" className="md:h-40 h-30" alt="" />
                    <p className="font-bold">सांस्कृतिक</p>
                </div>
                <div className="flex flex-col items-center justify-center  border-black p-3 bg-pink-200 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer rounded-2xl">
                    <img src="https://cdn-icons-png.flaticon.com/512/2966/2966486.png" className="md:h-40 h-30" alt="" />
                    <p className="font-bold">आरोग्य</p>
                </div>
                <div className="flex flex-col items-center justify-center  border-black p-3 bg-blue-gray-200 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer rounded-2xl ">
                    <img src="https://cdn-icons-png.flaticon.com/512/6202/6202949.png" className="md:h-40 h-30" alt="" />
                    <p className="font-bold">अन्य सामाजिक</p>
                </div>
            </div>

            <div className="mt-10 flex md:flex-row flex-col justify-center place-items-center md:ps-20 ps-7 pe-7 md:pe-20 gap-7  bg-gray-200 ">
                <div className="md:w-[70%] ">
                    <p className="leading-10 font-semibold text-justify">खासदार – माजी केंद्रीय मंत्री अरविंद सावंत यांची समाजसेवेची अचंबित करणारी वाटचाल सर्वांनाच सुपरिचित आहे. अरविंद सावंत यांच्या या समाजकारणात त्यांना महानगर टेलिफोन निगम लिमिटेडच्या कर्मचाऱ्यांची साथ कायम असते.  खरं तर ते सर्व अरविंद सावंत यांना पालकच समजतात. त्यांच्या समर्थ अध्यक्षतेखाली स्थापन केलेल्या या न्यासास निव्वळ जाणीव नाव देऊन ते थांबले नाहीत  तर पुढे ब्रीदवाक्य लिहिले “जाणीव, मुळांची आणि मूल्यांची” !! त्यांच्या मते समाजातील प्रत्येकाने आपले मूळ विसरु नये, आणि त्या मुळाशी असलेली बांधिलकीही आणि त्या मूळ विचारधारणेला वर्धिष्णू करताना ‘मूल्ये’ खरं तर जीवन मूल्येही  विसरु नयेत…!!! </p>
                    <div className="bg-orange-400 p-2 rounded-full text-center w-[50%]">
                        अधिक वाचा
                    </div>
                </div>

                <div className="">
                    <img src="https://www.janeevtrust.org/mr/wp-content/uploads/2022/04/inspiration.png" className="md:h-[600px] w-[700px]" alt="" />
                </div>
            </div>

            {/* Prawas */}

            <div className="flex gap-10 p-10 ps-10 pe-10 mt-7 md:flex-row flex-col justify-center  ">
                <div className="w-[100%]">
                    <img src="src\assets\pic.JPG" alt="" className="rounded-xl shadow-sm" />
                </div>
                <div className="">
                    <h1 className="text-center text-orange-900 font-semibold text-3xl">प्रवास...</h1>
                    <p className="mt-2  leading-10 font-semibold text-justify  ">खरं तर ‘जाणीव’ ट्रस्टची कागदोपत्री स्थापना काही वर्षांपूर्वी झाली असली तरी कार्यरुपी वाटचाल १९८६ मध्ये मराठी माणसाच्या न्याय्य हक्कांसाठी अरविंद सावंत यांनी महानगर टेलिफोन निगम मध्ये स्थानीय लोकाधिकार समितीची स्थापना केली तेंव्हापासुनच झाली. सुरुवातीपासुनच ही संघटना न्यायासाठी झगडत राहिली.
                        या न्यासातर्फे पुढे समाजकार्य वाढवले जाणार आहे. गोरगरीबांच्या मुलांना उच्च दर्जाचे शिक्षण शक्य झाल्यास मोफत वा माफक दरात ते देण्याचा ट्रस्टचा मनोदय आहे.
                        कार्यतत्पर, कार्यनिष्ठ असा जनतेचा ‘आपला माणूस’ श्री. अरविंद सावंत, जाणिवेने भरलेला आणि नेणिवेने साकारलेला आणि त्यांच्या मार्गदर्शनाखाली ‘जाणीव’ न्यास आपल्या ब्रीदवाक्यानुरुप वाटचाल करत आहे, मुळांची आणि मूल्यांची जाणीव जपत नेणीवेने !!!</p>
                </div>
            </div>

            <div>
                <div className="bg-red-100 md:ms-16 ms-3 md:me-16 me-3 mt-2 rounded-xl">
                    <div className="flex justify-center items-center p-10 gap-14">
                        <p className="text-4xl font-bold">समाजकार्यास हातभार लावा </p>
                        <div className="bg-white text-black p-3  rounded-full hover:bg-black hover:text-white cursor-pointer flex items-center justify-center gap-2 font-bold md:text-xl text-sm">
                        संपर्क
                            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111644.png" className="md:h-5 h-3" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>


    </>)
}   