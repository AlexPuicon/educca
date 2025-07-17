const Section1 = () => {
    return (
        <div className='grid grid-cols-2 bg-green-700 overflow-hidden' style={{ backgroundImage: 'url("./textura.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='text-6xl text-white flex flex-col gap-10 p-10'>
                <h4 className='font-bold'>¿QUIENES SOMOS?</h4>
                <p className='text-3xl z-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis placeat reprehenderit necessitatibus, quos harum velit aspernatur dolores vero porro fuga nam? Libero, quam temporibus ea omnis nostrum modi officiis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam accusantium voluptatum tenetur numquam itaque odit? Tempora, doloribus ad a, libero et natus facilis nemo fugit ullam voluptas non exercitationem facere?</p>
            </div>
            <div>
                <img src="./fondo-s1.png" className='w-full  h-full scale-150' alt="" />
            </div>
        </div>
    );
};

export default Section1;