/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Shop() {
    const arrivals = 
      {
        name: 'New Arrivals',
        description: 'Work from home accessories',
        imageSrc: 'https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3R5bGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      }
    const improvement =  
      {
        name: 'Self-Improvement',
        description: 'Journals and apparel',
        imageSrc: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      }
    const lifestyle =  
      {
        name: 'Life-Style',
        description: 'Daily commute essentials',
        imageSrc: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXBwYXJlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-9 sm:py-16 lg:py-20 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900">Shop by Category</h2>
            <div class="mt-6 space-y-12 rounded-lg grid grid-cols-1 gap-1 md:grid-cols-2">
                  <div className="relative md:row-span-3">
                    <h3 className="absolute ml-3 bottom-0 text-sm text-gray-300">              
                     <span className="absolute inset-0" />
                     {arrivals.name}               
                    </h3>
                    <p className="absolute ml-3 text-base bottom-4 font-semibold text-gray-50">{arrivals.description}</p>
                    <Link href="/store">  
                      <img
                       src={arrivals.imageSrc}
                       alt={arrivals.imageAlt}
                       className="w-fullcursor-pointer hover:opacity-75 rounded-lg object-center object-cover"
                     />
                    </Link>  
                  </div>
                  <div className="relative md:row-span-1">
                  <h3 className="absolute ml-3 bottom-0 text-sm text-gray-300">
                    <span className="absolute inset-0" />
                    {improvement.name}
                  </h3>
                  <p className="absolute ml-3 text-base bottom-4 font-semibold text-gray-50">{improvement.description}</p>
                  <Link href="/Women">  
                    <img
                    src={improvement.imageSrc}
                    alt={improvement.imageAlt}
                    className="w-full cursor-pointer hover:opacity-75 rounded-lg object-center object-cover xl:h-60 lg:h-44 md:h-28"
                    />
                  </Link>
                  </div>
                  <div className="mt-0 relative md:row-span-1">
                  <h3 className="absolute ml-3 bottom-0 text-sm text-gray-300">
                       <span className="absolute inset-0" />
                         {lifestyle.name}
                   </h3>
                   <p className="absolute ml-3 text-base bottom-4 font-semibold text-gray-50">{lifestyle.description}</p>
                   <Link href="/Men"> 
                    <img
                    src={lifestyle.imageSrc}
                    alt={lifestyle.imageAlt}
                    className="w-full cursor-pointer hover:opacity-75 rounded-lg object-center object-cover xl:h-60 lg:h-44 md:h-28"
                    />
                   </Link>
                  </div>
             </div>
        </div>
      </div> 
  );
}
