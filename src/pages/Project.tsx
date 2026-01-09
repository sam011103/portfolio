import { useParams } from 'react-router-dom';
import { projects } from '../constant';

export default function Project() {
    const { id } = useParams();
    const project = projects.find(p => p.id === Number(id));
    if (!project)
        return

    return (
        <>
            <section className="mb-12">
                <h1 className='text-3xl font-bold mb-6'>{project.title} ({project.name})</h1>
                {project.desc.map((d, index) => (
                    <p className="sm:text-lg mb-6 leading-relaxed " key={index}>{d}</p>
                ))}
                <div className="mb-3">
                    <span className="sm:text-lg text-white mr-2">Duration: {project.duration}</span>
                </div>
                <div className="mb-3">
                    <span className="sm:text-lg text-white mr-2">Github Link:</span>
                    <a
                        className="sm:text-lg text-white underline"
                        href={project.gh_link}
                    >
                        {project.gh_link}
                    </a>
                </div>
            </section>
            <section className="mb-12">
                <h1 className="text-2xl font-bold mb-4">Features</h1>
                <ul className="list-inside">
                    {project.features.map((feature, index) => (
                        <li className="list-disc text-white mb-12" key={index}>
                            <span className="sm:text-lg">{feature.name}</span>
                            <img src={"features/" + feature.img} alt={feature.img_alt} className="mt-3 sm:w-3/4" />
                        </li>
                    ))}
                </ul>
            </section>

            {/* <section className="mb-12">
                <h1 className="text-2xl font-bold mb-4">Page Views</h1>
            </section> */}
        </>
    )
}
