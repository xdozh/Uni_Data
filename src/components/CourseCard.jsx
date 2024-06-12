import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { fadeIn } from '../utils/motion';

const CourseCard = ({ courses }) => {
    return (
        // Change flex to grid and set up the grid properties
        <div className="grid grid-cols-3 gap-[1rem] max-lg:grid-cols-1">
            {courses.map((item, index) => (
                <motion.div
                    key={item.id}
                    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
                >
                    <Tilt
                        options={{
                            max: 45,
                            scale: 1,
                            speed: 450,
                        }}
                        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
                    >
                        <a href={item.url} target="_blank">
                            <div className="w-[19rem] max-lg:w-full h-full px-6 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 text-white" style={{ backgroundColor: 'transparent' }}>
                                <img
                                    src={item.image}
                                    alt='project_image'
                                    className='w-full h-full object-cover rounded-2xl'
                                />
                                <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
                                    {item.description}
                                </p>
                            </div>
                        </a>
                    </Tilt>
                </motion.div>
            ))}
        </div>
    );
};

export default CourseCard;

