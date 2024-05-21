import data from '/src/lessons.json'
export default function LessonCard(props) {
    
    
    return(
        <>
            <div className='w-full h-full shadow-md my-4 rounded-md min-h-[610px]'>
                <div className='relative rounded-t-md'>
                    <h4 className='absolute p-2 w-full bg-white/[0.6] text-xs'>Preschool (Lesson 5)</h4>
                    <img className='w-full' src="img/zoey-takes-a-stand.WEBP" alt="imagen" />
                </div>
                <div className='p-2'>
                   <div>
                        <h2>Zoey Takes A Stand</h2>
                        <p>Build Me "Emotions"</p>
                    </div>
                    <p>Develop an understanding that people have different preferences and dealing with disagreements.</p>
                    <div>
                        <p>Social Emotional Development, Creative Exploration</p>
                        <div>
                            <p>0-30 min.</p>
                            <p>Beginner</p>
                            <p>PreK-K</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='w-full h-full shadow-md my-4 rounded-md min-h-[610px]'>
                <div className='relative rounded-t-md'>
                    <h4 className='absolute p-2 w-full bg-white/[0.6] text-xs'>Preschool (Lesson 5)</h4>
                    <img className='w-full' src="img/zoey-takes-a-stand.WEBP" alt="imagen" />
                </div>
                <div className='p-2'>mundo</div>
            </div>
            
        </>
    )
}