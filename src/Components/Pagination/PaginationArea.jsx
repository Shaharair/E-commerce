import React from 'react'


const PaginationArea = ({ pageNumber,Paginate,currentPage,next,prev }) => {
    
    return (
        <>
            <nav className="pt-5" aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px text-sm">
                    <li>
                        <a onClick={prev} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg"
                        >
                            Previous
                        </a>
                    </li>
                    {pageNumber.map((item, i) => (
                        <li onClick={()=>Paginate(item)} className={currentPage == i + 1 ? "flex items-center justify-center px-3 h-8 leading-tight text-white bg-[#262626]" : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300"}>
                                {item + 1}
                        </li>
                         ))}
                    <li>
                        <a onClick={next} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border-gray-300"
                        >
                            Next
                        </a>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default PaginationArea