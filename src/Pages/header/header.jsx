import React, { useState } from "react";
import {
    Navbar,
    Collapse,
    Drawer,
    Typography,
    Button,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";

import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
    ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { Home } from "../Home/home";



function NavListMenu({ language }) {

    // Language


    // Janeev
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    // कार्यक्षेत्र
    const [istwoMenuOpen, setIstwoMenuOpen] = React.useState(false);
    const [istwoMobileMenuOpen, setIstwoMobileMenuOpen] = React.useState(false);

    // छायाचित्र
    const [isthreeMenuOpen, setIsthreeMenuOpen] = React.useState(false);
    const [isthreeMobileMenuOpen, setIsthreeMobileMenuOpen] = React.useState(false);



    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-bold text-gray-900"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            {language === "mr" ? "जाणीव" : "Knowledge"}
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>


                <MenuList className="hidden rounded-xl lg:block">

                    <MenuItem>{language === "mr" ? "स्थापना व उद्दिष्टे" : "Establishment & Objectives"}</MenuItem>
                    <MenuItem> {language === "mr" ? "प्रवासावर उद्दिष्टे" : "Travel Objectives"}</MenuItem>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>
                    <MenuItem>{language === "mr" ? "स्थापना व उद्दिष्टे" : "Establishment & Objectives"}</MenuItem>
                    <MenuItem> {language === "mr" ? "प्रवासावर उद्दिष्टे" : "Travel Objectives"}</MenuItem>
                </Collapse>
            </div>

            {/*  */}
            <Menu
                open={istwoMenuOpen}
                handler={setIstwoMenuOpen}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-bold text-gray-900"
                            selected={istwoMenuOpen || istwoMobileMenuOpen}
                            onClick={() => setIstwoMobileMenuOpen((cur) => !cur)}
                        >
                            {language === "mr" ? "कार्यक्षेत्र" : "Area of ​​work"}
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${istwoMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${istwoMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>


                <MenuList className="hidden rounded-xl lg:block">

                    <MenuItem> {language === "mr" ? "शैक्षणिक" : "Educational"}</MenuItem>
                    <MenuItem> {language === "mr" ? "कला" : "Art"}</MenuItem>
                    <MenuItem>  {language === "mr" ? "क्रीडा" : "Sports"} </MenuItem>
                    <MenuItem>  {language === "mr" ? "सांस्कृतिक" : "Cultural"}</MenuItem>
                    <MenuItem>  {language === "mr" ? "अन्य सामाजिक उपक्रम" : "Other social activities"}</MenuItem>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={istwoMobileMenuOpen}>
                    <MenuItem> {language === "mr" ? "शैक्षणिक" : "Educational"}</MenuItem>
                    <MenuItem> {language === "mr" ? "कला" : "Art"}</MenuItem>
                    <MenuItem>  {language === "mr" ? "क्रीडा" : "Sports"} </MenuItem>
                    <MenuItem>  {language === "mr" ? "सांस्कृतिक" : "Cultural"}</MenuItem>
                    <MenuItem>  {language === "mr" ? "अन्य सामाजिक उपक्रम" : "Other social activities"}</MenuItem>
                </Collapse>
            </div>

            {/*  */}

            <Menu
                open={isthreeMenuOpen}
                handler={setIsthreeMenuOpen}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4  text-gray-900 font-bold"
                            selected={isthreeMenuOpen || isthreeMobileMenuOpen}
                            onClick={() => setIsthreeMobileMenuOpen((cur) => !cur)}
                        >
                            {language === "mr" ? "छायाचित्र" : "Photograph"}
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isthreeMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isthreeMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>


                <MenuList className="hidden rounded-xl lg:block">

                    <MenuItem>  {language === "mr" ? "कोरोना काळात मदतीचा हात" : "A helping hand during Corona"}</MenuItem>
                    <MenuItem> {language === "mr" ? "प्रतिवर्ष गुणवान विद्यार्थांचा कौतुक सोहळा" : "Appreciation ceremony for meritorious students every year"}
                    </MenuItem>
                    <MenuItem> {language === "mr" ? "आदिवासीसोबत दिवाळी ४ दशके" : "Diwali with Adivasi 4 decades"} </MenuItem>
                    <MenuItem>{language === "mr" ? "पूरग्रस्तांना मदतीचा हात " : "A helping hand to the flood victims"} </MenuItem>
                    <MenuItem>{language === "mr" ? "सांस्कृतिक कार्यक्रम  " : "Cultural events"}</MenuItem>
                    <MenuItem> {language === "mr" ? " रुग्णवाहिका" : "A helping Ambulance"}</MenuItem>
                </MenuList>
            </Menu>




            <div className="block lg:hidden">
                <Collapse open={isthreeMobileMenuOpen}>

                <MenuItem>  {language === "mr" ? "कोरोना काळात मदतीचा हात" : "A helping hand during Corona"}</MenuItem>
                    <MenuItem> {language === "mr" ? "प्रतिवर्ष गुणवान विद्यार्थांचा कौतुक सोहळा" : "Appreciation ceremony for meritorious students every year"}
                    </MenuItem>
                    <MenuItem> {language === "mr" ? "आदिवासीसोबत दिवाळी ४ दशके" : "Diwali with Adivasi 4 decades"} </MenuItem>
                    <MenuItem>{language === "mr" ? "पूरग्रस्तांना मदतीचा हात " : "A helping hand to the flood victims"} </MenuItem>
                    <MenuItem>{language === "mr" ? "सांस्कृतिक कार्यक्रम  " : "Cultural events"}</MenuItem>
                    <MenuItem> {language === "mr" ? " रुग्णवाहिका" : "A helping Ambulance"}</MenuItem>
                </Collapse>
            </div>



        </React.Fragment>
    );
}

function NavList({ language }) {
    return (
        <List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center font-bold gap-2 py-2 pr-4">{language === "mr" ? "मुख्यपृष्ठ" : "home"}</ListItem>
            </Typography>

            <NavListMenu language={language} />
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4 font-bold"> {language === "mr" ? "संपर्क" : "contact"}</ListItem>
            </Typography>
        </List>
    );
}


export function Header() {
    const [openNav, setOpenNav] = React.useState(false);

    // drawer
    const [openRight, setOpenRight] = React.useState(false);
    const openDrawerRight = () => setOpenRight(true);
    const closeDrawerRight = () => setOpenRight(false);

    // 
    const [language, setLanguage] = useState("mr"); // Default language is English

    // Function to handle language change
    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);
    return (<>
        <Navbar className=" max-w-full rounded-none shadow-none ">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5 lg:ml-2"
                >
                    <img src="https://www.janeevtrust.org/mr/wp-content/uploads/2022/04/janeev-foundation-logo.png" className="w-14 " alt="" />
                </Typography>
                <div className="hidden lg:block">
                    <NavList language={language} />
                </div>
                <div className="hidden gap-2 lg:flex">
                    <Button size="sm" variant="outlined" color="red">     {language === "mr" ? "सामील व्हा!" : "Join Us!"}</Button>
                    <img src="https://cdn-icons-png.flaticon.com/512/10024/10024426.png" onClick={openDrawerRight} alt="" className="h-8 md:block hidden cursor-pointer" />
                    <Menu>
                        <MenuHandler>
                            <img src="https://cdn-icons-png.flaticon.com/512/685/685142.png" className="h-7 cursor-pointer" alt="" />
                        </MenuHandler>
                        <MenuList>
                            <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>
                            <MenuItem onClick={() => changeLanguage("mr")}>Marathi</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
                <IconButton
                    variant="text"
                    className="lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList  language={language}  />
                <div className="flex w-full flex-nowrap items-center justify-around gap-2 lg:hidden">
                    <Button size="sm" variant="outlined" color="red">     {language === "mr" ? "सामील व्हा!" : "Join Us!"}</Button>
                    <img src="https://cdn-icons-png.flaticon.com/512/10024/10024426.png" onClick={openDrawerRight} alt="" className="h-8 md:block hidden cursor-pointer" />
                    <Menu>
                        <MenuHandler>
                            <img src="https://cdn-icons-png.flaticon.com/512/685/685142.png" className="h-7 cursor-pointer" alt="" />
                        </MenuHandler>
                        <MenuList>
                            <MenuItem>English</MenuItem>
                            <MenuItem>Marathi</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </Collapse>

            <Drawer
                placement="right"
                open={openRight}
                color=""
            
                onClose={closeDrawerRight}
                    
                className="p-4 shadow-none"
            >
                <div className="mb-6 flex items-center justify-between ">
                    <Typography variant="h4" color="blue-gray">
                    {language === "mr" ? "सामील व्हा!" : "Join Us!"}
                    </Typography>
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        onClick={closeDrawerRight}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                               sm d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>
                <Typography color="gray" className="mb-8 pr-4 font-normal text-justify">
                {language === "mr" ? " खासदार श्री. अरविंद सावंत यांच्या मार्गदर्शनाखाली ‘जाणीव’ न्यास वाटचाल करत आहे, मुळांची आणि मूल्यांची जाणीव नेणीवेने जपत!!! आपणही सामिल व्हा समाजसेवेच्या विशाल कार्यात..." : "MP Mr. Under the guidance of Arvind Sawant, the 'Janiv' trust is moving forward, keeping the awareness of roots and values ​​alive!!! Join us in the great work of social service..."}
                   
                </Typography>1
                

                <hr className=" bg-black h-1" />
                <div className="text-black mt-10">
                    <p className="font-bold text-black text-sm">EMAIL US :</p>
                    <p className="text-sm font-medium">mtnksmumbai@gmail.com</p>
                </div>

                <div className="text-black mt-7">
                    <p className="font-bold text-black text-sm">Call Us :</p>
                    <p className="text-sm font-medium">+91-22-24163600</p>
                </div>

                <div className="text-black mt-7">       
                    <p className="font-bold text-black text-sm">Follow Us :</p>
                    <div className="mt-2 flex gap-7 cursor-pointer">
                        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" className="h-5" alt="" />
                        <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="" className="h-5" />
                        <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="" className="h-5" />
                    </div>
                </div>
                <hr className=" bg-black h-1 mt-7" />
                {/* <div className="flex gap-2">
                    <Button size="sm" variant="outlined">
                        Documentation
                    </Button>
                    <Button size="sm">Get Started</Button>
                </div> */}
            </Drawer>
          
        </Navbar>
        
        
        </>)
}