import React from 'react';

// Define an interface for the component props
interface IList {
  name: string;
  comment: string;
  date: string,
  trees: number
}

// Function component using the UserProps interface
const ListItem: React.FC<IList> = (props) => {

  const DateFormatter = (data: string) => {
    const date = new Date(data);

    // Keeping these as numbers
    const year: number = date.getFullYear();
    const month: number = date.getMonth() + 1; // getMonth() is 0-based
    const day: number = date.getDate();
    let hours: number = date.getHours(); // Keeping hours as a number

    const minutes: number = date.getMinutes();
    const ampm: string = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // Convert hour '0' to '12'

    // Only converting to string when necessary for formatting
    const formattedDate: string = `${year}/${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    return formattedDate;
  }

  const AmountSort = (amount: number) => {
    if (amount < 100)
      return 99
    else if (amount >= 100 && amount <= 500)
      return 100
    else if (amount > 500)
      return 1000
  }
  
  return (
    <div className="relative flex flex-col bg-white border shadow rounded-xl mb-3 w-full bg-clip-border">
      <nav className="flex flex-col gap-1 md:p-2 md:px-2 font-sans text-base font-normal text-blue-gray-700 min-w-[240px]">
        <div role="button" aria-label="Contribution Detail" tabIndex={0}
          className="flex justify-between items-center w-full p-2 transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:text-blue-gray-900 active:bg-blue-gray-50 active:text-blue-gray-900">
          <div className='flex items-center'>
            <div className="grid place-items-center mr-4">
              <img alt={`${props.name} contribution badge`} src={`assets/${AmountSort(props.trees)}.svg`}
                className="md:h-16 md:w-16 lg:w-20 lg:h-20 w-[50px] h-[50px] rounded-full object-cover object-center" /> 
            </div>
            <div>
              <h1 className="text-[12px] lg:text-xl lg:font-bold md:text-[14px] leading-relaxed text-blue-gray-900">
                {props.name}
              </h1>
              <p className="font-sans text-[9px]  md:text-[14px] md:text-sm text-gray-700 mb-2">
                {DateFormatter(props.date)}
              </p>
              <p className="robot-regular text-[9px] md:text-[14px] leading-[20px] max-w-[100px] md:max-w-[200px]">
                {props.comment}
              </p>
            </div>
          </div>
          <button aria-label={`${props.trees} trees planted`} tabIndex={0}
            className={`relative overflow-hidden border rounded-xl md:h-12 md:w-20 w-24 h-8 lg:w-32 lg:h-16 lg:font-bold text-white shadow-2xl transition-all ${props.trees > 500 ? "bg-[#7d58e7] border-[#7d58e7]" : "bg-green-500"} hover:shadow-lg before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40`}>
            <span className="relative z-10 text-[12px] md:text-[12px] lg:text-xl">{props.trees} trees</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default ListItem;