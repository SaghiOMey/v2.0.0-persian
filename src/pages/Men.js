/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Navigation from "@/components/Navigation";
import Link from "next/link";


export default function Men(props) {
    const products = [
        {
          id: "women",
          name: "Women",
          featured: [
            {
              name: "New Arrivals",
              href: "#",
              imageSrc: "https://media.istockphoto.com/photos/she-is-my-best-friend-picture-id1194741547?b=1&k=20&m=1194741547&s=170667a&w=0&h=nTF9xCL4Bzfz3V9xueJhcZ8svIWjg79UHeXt0KKJ_gc=",
              imageAlt: "Models sitting back to back, wearing Basic Tee in black and bone."
            },
            {
              name: "Basic Tees",
              href: "#",
              imageSrc: "https://images.unsplash.com/photo-1472746729193-36ad213ac4a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyMTI2NDQxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
              imageAlt: "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
            }
          ],
          sections: [
            {
              id: "clothing",
              name: "Clothing",
              items: [
                { name: "Tops", "href": "#" },
                { name: "Dresses", "href": "#" },
                { name: "Pants", "href": "#" },
                { name: "Denim", "href": "#" },
                { name: "Sweaters", "href": "#" },
                { name: "T-Shirts", "href": "#" },
                { name: "Jackets", "href": "#" },
                { name: "Activewear", "href": "#" },
                { name: "Browse All", "href": "#" }
              ]
            },
            {
              id: "accessories",
              name: "Accessories",
              items: [
                { name: "Watches", "href": "#" },
                { name: "Wallets", "href": "#" },
                { name: "Bags", "href": "#" },
                { name: "Sunglasses", "href": "#" },
                { name: "Hats", "href": "#" },
                { name: "Belts", "href": "#" }
              ]
            },
            {
              id: "brands",
              name: "Brands",
              items: [
                { name: "Full Nelson", "href": "#" },
                { name: "My Way", "href": "#" },
                { name: "Re-Arranged", "href": "#" },
                { name: "Counterfeit", "href": "#" },
                { name: "Significant Other", "href": "#" }
              ]
            }
         ]
        },
        {
          id: "men",
          name: "Men",
          featured: [
            {
              name: "New Arrivals",
              href: "#",
              imageSrc: "https://images.unsplash.com/photo-1555441842-7cbc8f6a7171?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw0NDU4ODAzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
              imageAlt: "Drawstring top with elastic loop closure and textured interior padding."
            },
            {
              name: "Artwork Tees",
              href: "#",
              imageSrc: "https://images.unsplash.com/photo-1592516195984-44d68247d57e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8Mjk1NjYyODh8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
              imageAlt:
                "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt."
            }
          ],
          sections: [
            {
              id: "clothing",
              name: "Clothing",
              items: [
                { name: "Tops", "href": "#" },
                { name: "Pants", "href": "#" },
                { name: "Sweaters", "href": "#" },
                { name: "T-Shirts", "href": "#" },
                { name: "Jackets", "href": "#" },
                { name: "Activewear", "href": "#" },
                { name: "Browse All", "href": "#" }
              ]
            },
            {
              id: "accessories",
              name: "Accessories",
              items: [
                { name: "Watches", "href": "#" },
                { name: "Wallets", "href": "#" },
                { name: "Bags", "href": "#" },
                { name: "Sunglasses", "href": "#" },
                { name: "Hats", "href": "#" },
                { name: "Belts", "href": "#" }
              ]
            },
            {
              id: "brands",
              name: "Brands",
              items: [
                { name: "Re-Arranged", "href": "#" },
                { name: "Counterfeit", "href": "#" },
                { name: "Full Nelson", "href": "#" },
                { name: "My Way", "href": "#" }
              ]
            }
          ]
        }
      ]

        const navigation = {
          pages: [
            { name: 'Company', href: '/company' },
            { name: 'Store', href: '/store' },
          ],
        }

    return(
        <>
      {props.user ?
        <>
      <Navigation props={props} />
      <div className="absolute inset-0 top-full bg-white shadow" aria-hidden="true" />
      {products.map((category) => (    
            <div className="relative bg-white">
              {category.id === 'men' ?
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16"> 
                  <div className="col-start-2 grid sm:grid-cols-2 sm:gap-x-8">
                    {category.featured.map((item) => (
                      <>
                      {item.name === 'New Arrivals' ? 
                      <Link href="/store">
                      <div key={item.name} className="group relative text-base sm:text-sm">
                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                          <img
                            src={item.imageSrc}
                            alt={item.imageAlt}
                            className="object-center object-cover"
                          />
                        </div>
                        <a className="mt-6 block font-medium text-gray-900">
                          <span className="absolute z-10 inset-0" aria-hidden="true" />
                          {item.name}
                        </a>
                        <p aria-hidden="true" className="mt-1">
                          Shop now
                        </p>
                      </div>
                      </Link>
                       : ''}
                       {item.name === 'Artwork Tees' ? 
                      <Link href="/store">
                      <div key={item.name} className="group relative text-base sm:text-sm">
                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                          <img
                            src={item.imageSrc}
                            alt={item.imageAlt}
                            className="object-center object-cover"
                          />
                        </div>
                        <a className="mt-6 block font-medium text-gray-900">
                          <span className="absolute z-10 inset-0" aria-hidden="true" />
                          {item.name}
                        </a>
                        <p aria-hidden="true" className="mt-1">
                          Shop now
                        </p>
                      </div>
                      </Link>
                       : ''}
                      </>
                    ))}
                  </div>
                  <div className="row-start-1 grid grid-cols-2 gap-y-5 gap-x-2 text-xs sm:grid-cols-3 sm:gap-x-2 sm:gap-y-10 sm:text-sm">
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p id={`${section.name}-heading`} className="font-semibold text-base text-gray-900">
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${section.name}-heading`}
                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flex">
                              <a href={item.href} className="hover:text-gray-800">
                                {item.name === 'Tops' ? <Link href="/Category/ManTops">{item.name}</Link> : ''}
                                {item.name === 'Dresses' ? <Link href="/dresses">{item.name}</Link> : ''}
                                {item.name === 'Pants' ? <Link href="/pants">{item.name}</Link> : ''}
                                {item.name === 'Denim' ? <Link href="/denim">{item.name}</Link> : ''}
                                {item.name === 'Sweaters' ? <Link href="/sweaters">{item.name}</Link> : ''}
                                {item.name === 'T-Shirts' ? <Link href="/t-shirts">{item.name}</Link> : ''}
                                {item.name === 'Jackets' ? <Link href="/jackets">{item.name}</Link> : ''}
                                {item.name === 'Activewear' ? <Link href="/activewear">{item.name}</Link> : ''}
                                {item.name === 'Browse All' ? <Link href="/browseall">{item.name}</Link> : ''}
                                {item.name === 'Watches' ? <Link href="/watches">{item.name}</Link> : ''}
                                {item.name === 'Wallets' ? <Link href="/wallets">{item.name}</Link> : ''}
                                {item.name === 'Bags' ? <Link href="/bags">{item.name}</Link> : ''}
                                {item.name === 'Sunglasses' ? <Link href="/sunglasses">{item.name}</Link> : ''}
                                {item.name === 'Hats' ? <Link href="/hats">{item.name}</Link> : ''}
                                {item.name === 'Belts' ? <Link href="/belts">{item.name}</Link> : ''}
                                {item.name === 'Full Nelson' ? <Link href="/full-nelson">{item.name}</Link> : ''}
                                {item.name === 'My Way' ? <Link href="/my-way">{item.name}</Link> : ''}
                                {item.name === 'Re-Arranged' ? <Link href="/re-arranged">{item.name}</Link> : ''}
                                {item.name === 'Counterfeit' ? <Link href="/counterfeit">{item.name}</Link> : ''}
                                {item.name === 'Significant Other' ? <Link href="/store">{item.name}</Link> : ''}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              : '' }
            </div>   
          ))}
      </>
      : 
      <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
        <svg aria-hidden="true" className="w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
        <span className="sr-only">Loading...</span>
      </div>
      }      
        </>
    );

}