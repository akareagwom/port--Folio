import folio from '../../images/folio.jpg'

const About = () => {
    return ( 
        <div>
            <div className='block  dark:bg-black text-slate-700  items-center justify-center lg:flex lg:items-center bg-slate-100  lg:justify-center'>
                <div className='w-80 mt-12 rounded'>
                    <img src={folio} alt="" srcset="" />
                </div>
                <div className='w-60 ml-11'>
                    <h2 className='text-2xl'>
                        Hi my name  is  <strong className='uppercase'>akare</strong>,I am a<strong className='uppercase'>frontend developer</strong>.
                    </h2>
                    <p className=''>I am a very enthusiastic person with the ability to adapt to my immediate environment, I am also a team player who believes in efficiency of team work.</p>
                </div>
            </div>
        </div> 
     );
}
 
export default About;