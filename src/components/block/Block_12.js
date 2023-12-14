import { GlobalDataContext } from "../../context/context";
import React, { useContext } from "react";
import imgDefault from '../../assets/image/placeholder.png'
import { VscDebugBreakpointData } from 'react-icons/vsc'
import { ButtonContent } from "../global/boton/ButtonContent";
import CountUp from 'react-countup';




function Block_12({ image1, image2, image3, title, subtitle2, text, listAbout, listServices, sloganPrincipal }) {

    const { rpdata } = useContext(GlobalDataContext);

    const counterInfo = [
        {
            title: 'Best Service',
            number: '100',
            simbolo: '%',
        },
    ]


    return (

        <section className="w-4/5 mx-auto md:py-32 py-10">
            <div className="md:flex md:flex-row flex flex-col-reverse md:p-0 px-2  relative">
                <div className="md:w-[50%] py-4 md:px-8 px-3 self-center md:text-start text-center" data-aos="fade-up" data-aos-duration="900">
                    {
                        <h5 className="separator-about capitalize textColor1 text-[20px]">
                            {
                                title ? title :
                                    <span className='lowercase text-[18px]'>
                                        {`default title={'frase'}`} o
                                        {` agregar licencia o años de experienceias sloganPrincipal={true}`}
                                    </span>
                            }
                        </h5>
                    }

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
                            <h2 className="separator-about capitalize font-bold">
                                {
                                    subtitle2 ? subtitle2 :
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
                    <div className="flex md:flex-row flex-col items-center gap-4">
                        <div className="md:w-[40%] w-[100%] flex md:justify-start justify-center text-center rounded-2xl">
                            {
                                counterInfo.map((items, index) => {
                                    return (
                                        <div key={index} className={`text-center p-5 relative bg-2 rounded-2xl`}>
                                            <div>
                                                <CountUp
                                                    end={items.number}
                                                    duration={5}
                                                    className='text-white text-[69px]'
                                                />
                                                <span className='text-white text-[69px]'>{items.simbolo}</span>
                                            </div>
                                            <p className='text-white text-[18px]'>{items.title}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="w-1/2 md:my-4 -my-8 py-10 flex justify-start">
                            <ButtonContent btnStyle='three' />
                        </div>
                    </div>
                    <div className="w-full">
                        <span className="separator-about"></span>
                    </div>
                </div>
                <div className="md:w-[50%] w-[100%] h-auto flex justify-end mb-10">
                    <div className="md:w-1/2 w-[100%] h-full relative flex justify-end">
                        <img
                            src={image1 ? image1 : imgDefault}
                            alt="defaultimagen"
                            className="object-cover md:h-[500px] md:w-[350px] h-[350px] w-[200px]"
                        />
                        <div className="absolute  bottom-10 md:-left-44 -left-10">
                            <img
                                src={image2 ? image2 : imgDefault}
                                alt="defaultimagen"
                                className="object-cover md:h-[400px] h-[350px] md:w-[250px] w-[200px] border-white border-[20px]"
                            />
                        </div>
                    </div>
                </div>
                <div className="md:flex hidden absolute right-20 bottom-2 ">
                    <img
                        src={image3 ? image3 : imgDefault}
                        alt="defaultimagen"
                        className="object-cover md:h-[300px] h-[350px] md:w-[250px] w-[200px] border-white border-[20px]"
                    />
                </div>
            </div>
        </section>
    );
}

export default Block_12;