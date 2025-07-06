import React from "react";
import Navbar from "../Layout/Navbar";
import greenLeaf from "../assets/images/greenLeaf.jpg";

const Homepage = () => {
    return (
        <div className="bg-white min-h-screen text-gray-800 font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-10">

                {/* Text Left */}
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
                        Welcome to <span className="text-green-600">Greenity</span>
                    </h1>
                    <p className="text-gray-800 text-lg md:text-xl max-w-xl mx-auto md:mx-0 mb-8">
                        Explore stories, ideas, and global goals that drive sustainable community development.
                    </p>

                    {/* Buttons */}
                    <div className="flex justify-center md:justify-start gap-4">
                        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                            Learn More
                        </button>
                        <button className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition">
                            Explore SDGs goals
                        </button>
                    </div>
                </div>

                {/* Image Right */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src="https://t4.ftcdn.net/jpg/06/31/62/81/360_F_631628115_RGLHpaioe3hQMbI8lFyBLkyQ3rC5szzS.jpg"
                        alt="Community Development"
                        className="rounded-xl shadow-lg w-full max-w-md object-cover"
                    />
                </div>

            </section>



            {/* Introduction Section */}
            <section className="py-16 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold text-black mb-10 text-center">What is <span className="text-green-700">Greenity?</span></h2>
                <div className="bg-green-50 p-6 rounded-xl shadow-md grid md:grid-cols-2 gap-8 items-center">

                    {/* Text Left */}
                    <div>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            <span className="font-semibold">Greenity</span> is a blog website where
                            changemakers, students, and citizens who are interested in community developement can read, learn and explore the United Nations’
                            Sustainable Development Goals (SDGs). Through educational content, we aim to empower local communities to build a greener, fairer, and more inclusive future.
                            This is our truly intention why we built this.
                        </p>
                    </div>

                    {/* Image Right */}
                    <div className="flex justify-center">
                        <img
                            src={greenLeaf}
                            alt="Green Leaf"
                            className="rounded-lg shadow-lg max-w-sm w-full"
                        />
                    </div>
                </div>
            </section>


            {/* Mission Section */}
            <section className="bg-green-100 py-16 px-6 max-w-5xl mx-auto text-center rounded-xl shadow-inner">
                <h2 className="text-3xl font-semibold text-green-800 mb-6">Who Are We and Our Mission</h2>
                <p className="text-gray-800 text-lg leading-relaxed max-w-3xl mx-auto">
                    We are tech lovers who want to conbine technology with community developemnt. We also want to
                    research about SDGs goals and also want to offer educational content to individuals who are also interested
                    in community developement like us.
                    At Greenity, our mission is to inspire individuals to contribute to sustainable
                    development through knowledge-sharing. We believe that education
                    and awareness are the first steps to real change. By exploring global SDG goals and local
                    efforts, we help connect passion with purpose.
                </p>
                <img
                    src="https://m.universalclass.com/i/course/communitydevelopment/studycommunitydevelopment37912.jpg"
                    alt="Mission Visual"
                    className="mt-10 mx-auto rounded-xl shadow-lg"
                />
            </section>
        </div>
    );
};

export default Homepage;
