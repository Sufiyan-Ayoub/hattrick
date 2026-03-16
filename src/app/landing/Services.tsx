const Services = () => {
    const servicesData = [
        { label: 'Graphic Design', img: 'graphic-design.png' },
        { label: 'UX/UI Design', img: 'ux-ui-design.webp' },
        { label: 'Web Development', img: 'web-dev.webp' },
        { label: 'Game Development', img: 'game-dev.webp' },
        { label: 'Project Management', img: 'project-management.webp' },
        { label: 'Marketing', img: 'marketing.webp' },
        { label: 'Backend Development', img: 'backend.webp' },
        { label: 'Artificial Intelligence', img: 'ai.webp' },
        { label: 'Data Science', img: 'data-science.webp' }
    ]

    return (
        <div className="services sector rel c111" data-bg="#c2decf">
            <h1 className="s70 b900 tc">Our Services</h1>

            <div className="grid blocks">
                {servicesData.map((service, index) => (
                    <div
                        key={index}
                        className={`block rel flex col a${index + 1}`}
                    >
                        <h1 className="s30 cfff rel">{service.label}</h1>
                        <img
                            className="abs anim"
                            src={`/imgs/${service.img}`}
                            alt={service.label}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services