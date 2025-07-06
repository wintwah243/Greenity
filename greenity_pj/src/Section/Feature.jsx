import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Feature = () => {

    const SDGgoals = [
        {
            title: "No poverty",
            color: "bg-red-100",
            des: "End poverty in all its forms everywhere."
        },
        {
            title: "Zero Hunger",
            color: "bg-yellow-100",
            des: "End hunger, achieve food security and improved nutrition, and promote sustainable agriculture."
        },
        {
            title: "Good Health and Well-being",
            color: "bg-green-100",
            des: "Ensure healthy lives and promote well-being for all at all ages."
        },
        {
            title: "Quality Education",
            color: "bg-orange-100",
            des: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all."
        },
        {
            title: "Gender Equality",
            color: "bg-purple-100",
            des: "Achieve gender equality and empower all women and girls."
        },
        {
            title: "Clean Water and Sanitation",
            color: "bg-blue-100",
            des: "Ensure availability and sustainable management of water and sanitation for all."
        },
    ];

    return (
        <div className="bg-white min-h-screen text-gray-800">

            {/* SDG Topics Section */}
            <section className="py-16 px-6 max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-green-600 text-center">
                    Explore SDG Goals
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {SDGgoals.map((goal, index) => (
                        <div
                            key={index}
                            className={`${goal.color} p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between`}
                        >
                            <div>
                                <h3 className="text-2xl font-semibold mb-3 text-black">{goal.title}</h3>
                                <p className="text-black text-sm leading-relaxed mb-6">
                                    {goal.des}
                                </p>
                            </div>
                            <button className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-black hover:underline">
                                Read more <FaArrowRight className="mt-0.5" />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Explore More Button */}
                <div className="mt-12 text-center">
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white text-sm font-semibold rounded-full shadow hover:bg-green-700 transition duration-300">
                        Explore More Goals <FaArrowRight />
                    </button>
                </div>
            </section>

        </div>
    );
};

export default Feature;
