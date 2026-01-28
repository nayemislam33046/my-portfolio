import { FaBolt, FaMobileAlt, FaLightbulb, FaAtom } from 'react-icons/fa';

const features = [
  {
    icon: <FaBolt size={36} />,
    title: 'Fast',
    desc: 'Fast load times and lag free interaction, my highest priority',
    colorIcon: 'text-orange-500'
  },
  {
    icon: <FaMobileAlt size={36} />,
    title: 'Responsive',
    desc: 'My layouts will work on any device, big or small.',
    colorIcon: 'text-gray-500'
  },
  {
    icon: <FaLightbulb size={36} />,
    title: 'Intuitive',
    desc: 'My layouts will work on any device, big or small.',
    colorIcon: 'text-yellow-500'
  },
  {
    icon: <FaAtom size={36} />,
    title: 'Dynamic',
    desc: "Websites don't have to be static. I love making pages come to life.",
    colorIcon: 'text-blue-500'
  },
];

export default function Service() {
  return (
    <div className=" py-12 px-4 md:px-16 text-center my-8" id='service'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#00ffcc] text-black dark:bg-[#00ffcc] dark:text-black shadow-xl p-6 rounded-xl relative hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl mb-4 flex items-center justify-center">
              <span className={`bg-slate-800 p-5 ${item.colorIcon}`}>{item.icon}</span>
            </div>
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-sm mt-2 text-gray-800">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}