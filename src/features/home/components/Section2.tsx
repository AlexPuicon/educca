import { ArrowRight } from 'lucide-react';

const Section2 = () => {
    return (
        <div className='grid grid-cols-2 p-10 bg-green-700 overflow-hidden' style={{ backgroundImage: 'url("./textura.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div>
                <img src="./fondo-s2.png" className='w-full h-full' alt="" />
            </div>
            <div className='mt-20'>
                <h4 className='text-white -ml-80 text-5xl text-center font-bold'>LINEAS DE ACCIÓN</h4>
                <div className='flex flex-col items-center mt-10 gap-4'>
                    <div className='bg-white rounded-lg w-120 flex gap-4 font-bold text-green-800'>
                        <div className='bg-[#c7dd54] text-7xl px-5 flex items-center rounded-lg'>
                            1
                        </div>
                        <div className='text-2xl font-bold p-3 flex flex-col'>
                            Promoción de la educación ambiental
                            <div className='flex justify-end'>
                                <ArrowRight className='bg-green-700 text-white  h-8 w-8 rounded-full' />
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-lg w-120 flex gap-4 font-bold text-green-800'>
                        <div className='bg-[#c7dd54] text-7xl px-5 flex items-center rounded-lg'>
                            2
                        </div>
                        <div className='text-2xl font-bold p-3 flex flex-col'>
                            Promoción de la educación ambiental
                            <div className='flex justify-end'>
                                <ArrowRight className='bg-green-700 text-white  h-8 w-8 rounded-full' />
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-lg w-120 flex gap-4 font-bold text-green-800'>
                        <div className='bg-[#c7dd54] text-7xl px-5 flex items-center rounded-lg'>
                            3
                        </div>
                        <div className='text-2xl font-bold p-3 flex flex-col'>
                            Promoción de la educación ambiental
                            <div className='flex justify-end'>
                                <ArrowRight className='bg-green-700 text-white  h-8 w-8 rounded-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section2;