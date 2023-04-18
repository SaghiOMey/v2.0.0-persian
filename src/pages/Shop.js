/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Shop(props) {
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
      // console.log(props.user ? props.user.displayName : "no");
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-2xl mx-auto py-9 sm:py-16 lg:py-20 lg:max-w-none">
          {props.user ?
          <>
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
          </>   
             :
             <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
              <svg aria-hidden="true" className="w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
              <span className="sr-only">Loading...</span>
             </div>
            }
        </div>
      </div> 
  );
}
