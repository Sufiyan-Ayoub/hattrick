'use client'
import { ExternalLink } from 'lucide-react'
import { projects } from '../page'
import { useParams, useRouter } from 'next/navigation'

const Page = () => {
    const { id } = useParams()
    const router = useRouter()
    const project = projects.find(x => x.id == Number(id))

    if ( !project ) {
        router.push(`/work`)
        return;
    }
    
    return (
        <div className="--showcase-dtl flex cols">
            <div className="--sdtl-hero flex aic">
                <div className='--meta flex cols'>
                    <h1 className='--lbl b900'>{project.title}</h1> 
                    <p className='s20'>{project.description}</p>
                    <button className="--btn ass flex aic">
                        Visit Live Site <ExternalLink size={18} />
                    </button>
                </div>

                <div className='--g'>
                    <img src={project.images[0]} />
                </div>
            </div>
            <div className="--gallery">
                {project.images.map((img, i) => (
                    <div key={i} className="gallery-item">
                        <img src={img} alt={`Gallery ${i}`} />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Page