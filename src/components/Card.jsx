function Card({name, title, intro, testimonial, color, image, backgroundImage}) {
    return (
        <div className={`card w-full h-full ${color} relative rounded-lg shadow-2xl shadow-Grey-400 p-8 flex flex-col gap-4 justify-between`}>
            <div className="user-info flex items-center gap-4 z-[2]">
                <div className="user-image">
                    <img src={image} alt={`${name} Avatar`} className='w-8 h-8 rounded-full object-cover' />
                </div>
                <div className="user-name">
                    <h3 className="text-sm font-medium">{name}</h3>
                    <p className="text-xs font-light">{title}</p>
                </div>
            </div>
            <p className="intro text-p-large font-bold leading-tight xl:text-p-intro z-[2]">{intro}</p>
            <p className="testimonial text-p z-[2]">{testimonial}</p>
            {backgroundImage && (
                <img src={backgroundImage} alt={`${name} Avatar`} className='w-27 h-27 absolute top-0 right-18 hidden xl:block object-cover z-[1]' />
            )}
        </div>
    )
}

export default Card;