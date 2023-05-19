import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { BiLocationPlus } from "react-icons/bi";

export default function DropdownComponent() {
    return (
        <div className="relative w-full lg:max-w-sm">
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
            <BiLocationPlus className="absolute w-5 h-5 text-gray-400 top-3 right-3" />
                <option>Search, City, State or ZIP</option>
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Bangalore</option>
            </select>
        </div>
    );
}