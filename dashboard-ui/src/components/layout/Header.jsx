import React from 'react';
import { Search, Menu, Plus, ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <header className=" bg-[#f8f1f6]">
      <div className="flex items-center justify-between px-6 h-18 border-b border-gray-200">

        {/* Left Section  */}
        <div className="flex items-center gap-14">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold ">C</span>
            </div>
            <button className="flex items-center gap-1 hover:bg-gray-50 px-2 py-1 rounded transition-all">
              <span className="text-sm font-medium text-gray-900">Codename.com</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          {/* Search Bar */}
          <div className=" relative w-[320px] ml-14">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder='Try searching "Insights"'
              className="w-full pl-9 pr-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 
                       bg-white border-0 rounded-full focus:outline-none focus:ring-1 
                      ring-gray-300 transition-all"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <div className='flex items-center px-2 bg-white rounded-full'>
            <button className="p-2 hover:bg-gray-50 rounded-lg transition-all">
              <Menu className="w-5 h-5 text-gray-600" />
            </button>

            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img src="https://media.istockphoto.com/id/1205289672/photo/majestic-bright-sunrise-over-ocean.jpg?s=612x612&w=0&k=20&c=sG7YEXKCLRu0Rn5FpIEgbefuKkeNO1wuV634C9ZMyuU=" alt="Flag" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Plus Button */}
          <button className="w-8 h-8 bg-[#E91E63] hover:bg-[#D81B60] rounded-full flex items-center 
                           justify-center transition-all">
            <Plus className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

    </header>
  );
};
