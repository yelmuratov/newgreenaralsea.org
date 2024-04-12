import React from 'react'
import { AppDispatch } from '../redux/store'
import { useDispatch } from 'react-redux'
import { setArticle } from '../redux/reducers/microServices';
import { useNavigate } from 'react-router-dom';

interface Inew {
    article: INews;
}

const NewsCard: React.FC<Inew> = ({article}) => {
    // Function to limit the number of words in content
    const limitContent = (content: string, limit: number) => {
        if (content.length > limit) {
            return content.slice(0, limit) + '...';
        }
        return content;
    }

    const dispatch: AppDispatch = useDispatch();
    const naviate = useNavigate();
    
    const handleNews = () => {
        dispatch(setArticle(article));
        naviate('/news');
    }


    return (
        <div className="max-w-lg bg-white border max-h-[520px] rounded-lg shadow relative transform motion-safe:hover:scale-110 pb-12 sm:pb-0  md:pb-0 duration-150 lg:pb-4">
            <a href="#">
                <img className='rounded-t-lg h-[50%] w-full' src={article.image} alt="ARTICLE IMAGE" />
            </a>
            <div className="p-5">
                    <h5 className="mb-2 text-2xl md:text-[15px] lg:text-2xl leading-[25px] font-bold tracking-tight text-gray-900">{article.title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 md:text-[14px] lg:text-[17px]">{limitContent(article.description, 150)}</p>
                <button onClick={handleNews} className="my-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default NewsCard

