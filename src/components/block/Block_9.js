import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { ButtonContent } from "../global/boton/ButtonContent";
import { VscDebugBreakpointData } from 'react-icons/vsc'


import imgDefault from '../../assets/image/placeholder.png'



function BlockFour({ image1, image3, title, text, listAbout, listServices, sloganPrincipal }) {
    const { rpdata } = useContext(GlobalDataContext);
    return (
        <>
            <section className="w-4/5 mx-auto md:py-32 py-10">
                <div className="md:flex flex flex-col md:p-0 px-2 md:flex-row-reverse">
                    <div className="md:w-[50%] relative flex  md:space-x-0 space-x-8" data-aos="zoom-out-right"
                        data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                        <div
                            className=" absolute -left-5  md:w-[300px] md:md:h-[265px] w-[150px] h-[150px] bg-cover bg-center rounded-tl-[120px] rounded-bl-[120px] rounded-br-[120px] shadow-lg border-white border-[10px]"
                            style={{ backgroundImage: `url("${image1 ? image1 : imgDefault}")` }}
                        ></div>
                        <div
                            className=" absolute md:-left-5 -left-14 top-[50%] md:w-[300px] md:md:h-[265px] w-[150px] h-[150px] bg-contain bg-no-repeat bg-center rounded-tl-[120px] rounded-bl-[120px] rounded-tr-[120px] "
                            style={{ backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/imagenes-de-stock-y-redes.appspot.com/o/20.png?alt=media&token=6471eeb2-f3cf-4f34-877c-eabfc06b66fc")` }}
                        ></div>
                        <div className="md:w-[300px] md:md:h-[550px] w-[300px] h-[300px]"></div>
                        <div
                            className=" md:w-[300px] md:md:h-[550px] w-[500px] h-[300px] bg-cover bg-center rounded-br-[120px] rounded-tr-[120px] shadow-lg border-white border-[10px]"
                            style={{ backgroundImage: `url("${image3 ? image3 : imgDefault}")` }}
                        ></div>

                    </div>

                    <div className="md:w-[50%] py-4 md:px-8 px-3 self-center md:text-start text-center">
                        {
                            sloganPrincipal ?
                                rpdata?.dbPrincipal?.licensed ?
                                    <h2 className='pb-3 capitalize'>
                                        {rpdata?.dbPrincipal?.licensed}
                                    </h2>
                                    : <h2 className='pb-10 capitalize'>
                                        {
                                            rpdata?.dbPrincipal?.exprYears ?
                                                `we have ${rpdata?.dbPrincipal?.exprYears} years of experience`
                                                : 'we have many years of experience'
                                        }
                                    </h2>
                                :
                                <h2 className="separator-about capitalize">
                                    {
                                        title ? title :
                                            <span className='lowercase text-[18px]'>
                                                {`default title={'frase'}`} o
                                                {` agregar licencia o años de experienceias sloganPrincipal={true}`}
                                            </span>
                                    }
                                </h2>
                        }
                        <p className="pb-4">
                            {
                                text ? text :
                                    <span>{`para agregar el texto -> text={'description'}`}
                                        <br />{'para agregar lista de about -> listsAbout={true}'}
                                        <br />{'para agregar lista de servicios -> listsServices={true}'}
                                    </span>
                            }
                        </p>
                        {
                            listAbout ?
                                <ul className='grid grid-cols-1 md:grid-cols-2 pb-5'>
                                    {
                                        rpdata?.dbAbout?.[0].list.length > 1 ?
                                            rpdata?.dbAbout?.[0].list.map((item, index) => {
                                                return (

                                                    <li key={index} className="py-2 flex items-center">
                                                        <VscDebugBreakpointData />
                                                        <span className="pl-2">{item}</span>
                                                    </li>
                                                )
                                            })
                                            : null
                                    }
                                </ul>
                                : null
                        }
                        {
                            listServices ?
                                <ul className="grid grid-cols-1 md:grid-cols-2 pb-5">
                                    {rpdata?.dbServices?.slice(0, 6).map((item, index) => {
                                        return (
                                            <li key={index} className="py-1 flex items-center">
                                                <VscDebugBreakpointData />
                                                <span>{item.name}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                                : null
                        }

                        <ButtonContent btnStyle='three' />

                        <div className="w-full">
                            <span className="separator-about"></span>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default BlockFour;
