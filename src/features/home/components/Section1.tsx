const Section1 = () => {
    return (
        <div className='grid grid-cols-2 bg-green-700 overflow-hidden' style={{ backgroundImage: 'url("./textura.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='text-6xl text-white flex flex-col gap-10 p-10'>
                <h4 className='font-bold'>¿QUIENES SOMOS?</h4>
                <p className='text-3xl z-10'>El Programa Municipal de Educación, Cultura y Ciudadanía Ambiental (EDUCCA) es una iniciativa fundamental de la Municipalidad Provincial de Tambopata, aprobada mediante la Ordenanza Municipal N°006-2023-CMPT-SO. Su propósito principal es impulsar la conciencia y participación ciudadana activa en la gestión sostenible de residuos y recursos, construyendo así comunidades más sostenibles en nuestra provincia.</p>
                <p className='text-3xl z-10'>A través de EDUCCA, buscamos fomentar una cultura ambiental sólida, promoviendo valores y prácticas que mejoren la calidad de vida de todos los habitantes y protejan la rica biodiversidad de nuestra región.</p>
            </div>
            <div>
                <img src="./fondo-s1.png" className='w-full  h-full scale-150' alt="" />
            </div>
        </div>
    );
};

export default Section1;